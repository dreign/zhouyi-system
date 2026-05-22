// DeepSeek AI服务封装

export async function getAIInterpretation(prompt: string): Promise<string> {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  
  if (!apiKey) {
    return 'AI解读功能需要配置DEEPSEEK_API_KEY环境变量。';
  }
  
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: '你是一位精通易经、八字命理和姓名学的资深顾问。请用简洁易懂的语言为用户提供专业的解读。'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.7
      })
    });
    
    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content;
    }
    
    return '无法获取AI解读，请稍后重试。';
  } catch (error) {
    console.error('AI API error:', error);
    return 'AI服务暂时不可用，请稍后重试。';
  }
}

export async function getYiJingInterpretation(guaName: string, question: string): Promise<string> {
  const prompt = `
    用户问：${question}
    
    占得${guaName}，请从以下几个方面进行解读：
    
    1. 卦象分析：该卦的基本含义和象征意义
    2. 现状分析：当前处境的特点和关键因素
    3. 建议行动：针对用户问题的具体建议
    4. 注意事项：需要特别留意的事项
    
    请用中文回答，语言通俗易懂，避免过于专业的术语。
  `;
  
  return await getAIInterpretation(prompt);
}

export async function getBaziAnalysis(baziString: string, dayMain: string, wuxingScore: Record<string, number>): Promise<string> {
  const prompt = `
    八字：${baziString}
    日主：${dayMain}
    五行得分：${JSON.stringify(wuxingScore)}
    
    请分析这个八字的：
    
    1. 五行格局：各五行的强弱分析
    2. 日主强弱：日主(${dayMain})的强弱判断
    3. 性格特点：基于八字的性格分析
    4. 运势提示：整体运势的简要分析
    
    请用中文回答，语言通俗易懂。
  `;
  
  return await getAIInterpretation(prompt);
}

export async function getNameAnalysis(name: string, wuxing: string[], score: number): Promise<string> {
  const prompt = `
    姓名：${name}
    五行属性：${wuxing.join('、')}
    评分：${score}分
    
    请分析这个名字的：
    
    1. 五行搭配：名字中各字的五行关系
    2. 寓意解读：名字的含义和美好祝愿
    3. 音律美感：名字的读音是否顺口
    4. 综合评价：对名字的整体评价和建议
    
    请用中文回答，语言通俗易懂。
  `;
  
  return await getAIInterpretation(prompt);
}