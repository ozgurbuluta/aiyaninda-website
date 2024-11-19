// app/api/chat/route.js
export async function POST(req) {
    if (!process.env.MISTRAL_API_KEY) {
      return Response.json(
        { error: 'API anahtarı yapılandırması eksik.' }, 
        { status: 500 }
      );
    }
  
    try {
      const { messages } = await req.json();
      
      const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
        },
        body: JSON.stringify({
          model: "mistral-large-latest",
          messages: [
            {
              role: "system",
              content: `Sen "AIYanında"'nın yapay zeka asistanısın. 
                - AIYanında, KOBİ'lere yapay zeka çözümleri sunuyor
                - Sen her zaman profesyonel ve yardımsever bir ton kullanıyorsun
                - Türkçe iletişim kuruyorsun
                - Fiyatlandırma ve hizmetler hakkında genel bilgi istenirse, bilgi için mail atmalarını söyle.
                - Detaylı bilgi için iletişime yönlendirirsin.
                - Şirket kurucuları Özgür Bulut Akanay ve Kağan Karabayır'dır. (Sadece sorulursa söyle)
                - Ne iş yaptığımız sorulduğunda, KOBİ'lere yapay zeka çözümleri sunduğumuzu söyleyip, daha fazla bilgi almak için info@aiyaninda.com'a mail atmalarını söyle. `
            },
            ...messages
          ],
          temperature: 0.7  // Only adding this safe parameter
        })
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        console.error('API Error Details:', data);
        throw new Error('API request failed');
      }
  
      return Response.json({ 
        content: data.choices[0].message.content 
      });
    } catch (error) {
      console.error('Mistral API Error:', error);
      return Response.json(
        { error: 'Bir hata oluştu, lütfen tekrar deneyin.' }, 
        { status: 500 }
      );
    }
  }