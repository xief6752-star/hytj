// AUTO-GENERATED brand compare data.
// 12 machine-vs-machine 长尾组合. See scripts/gen_brand_compare.py to regenerate.
import type { I18n } from "./tools";

export interface BrandComparePair {
  slugA: string;
  slugB: string;
  winner?: string;  // slug of winner (optional; drives conclusion CTA)
  summary: I18n;
  faq: { q: I18n; a: I18n }[];
}

export const BRAND_COMPARE_PAIRS: BrandComparePair[] = [
  {
    slugA: "yuntu",
    slugB: "shunyun",
    winner: "yuntu",
    summary: {
      zh: "云图机场（9.2）主打 IPLC 专线稳定 + 流媒体解锁全套，价格中端 ¥12/月起；瞬云机场（9.2）是中转+专线混合架构，节点多、价格低 ¥16/月起。日常使用云图更稳，追求节点数量和折扣选瞬云。",
      en: "YunTu (9.2) is IPLC-first with full streaming unlock at ¥12+/mo. ShunYun (9.2) mixes transit + dedicated for more nodes at ¥16+/mo. Pick YunTu for daily stability, ShunYun for node variety and price.",
      ar: "YunTu (9.2) IPLC مستقر بـ¥12+/شهر. ShunYun (9.2) خطوط مختلطة بـ¥16+/شهر. YunTu للاستقرار، ShunYun للتنوع.",
    },
    faq: [
      {
        q: {
          zh: "云图机场 和 瞬云机场 哪个更好？",
          en: "Which is better between 云图机场 and 瞬云机场?",
          ar: "أيهما أفضل بين 云图机场 و 瞬云机场؟",
        },
        a: {
          zh: "云图机场（9.2）主打 IPLC 专线稳定 + 流媒体解锁全套，价格中端 ¥12/月起；瞬云机场（9.2）是中转+专线混合架构，节点多、价格低 ¥16/月起。日常使用云图更稳，追求节点数量和折扣选瞬云。",
          en: "YunTu (9.2) is IPLC-first with full streaming unlock at ¥12+/mo. ShunYun (9.2) mixes transit + dedicated for more nodes at ¥16+/mo. Pick YunTu for daily stability, ShunYun for node variety and price.",
          ar: "YunTu (9.2) IPLC مستقر بـ¥12+/شهر. ShunYun (9.2) خطوط مختلطة بـ¥16+/شهر. YunTu للاستقرار، ShunYun للتنوع.",
        },
      },
      {
        q: {
          zh: "云图机场 和 瞬云机场 价格差多少？",
          en: "How different are 云图机场 and 瞬云机场 in price?",
          ar: "ما الفرق في السعر بين 云图机场 و 瞬云机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "云图机场 和 瞬云机场 都能看 Netflix 4K 吗？",
          en: "Do both 云图机场 and 瞬云机场 support Netflix 4K?",
          ar: "هل يدعم كل من 云图机场 و 瞬云机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "yuntu",
    slugB: "huanyuyun",
    winner: "huanyuyun",
    summary: {
      zh: "云图（9.2）覆盖 20+ 国家 IPLC 专线，中端定价；寰宇云（9.6）主打 BGP 三网优化 + IEPL 广港专线 2.5Gbps，¥28/月起。电信/联通/移动多网切换用户强推寰宇云，单一运营商用户选云图性价比更高。",
      en: "YunTu (9.2) has 20+ country IPLC coverage at mid price. HuanYuYun (9.6) leads with BGP-optimized IEPL Canton-HK links up to 2.5Gbps, ¥28+/mo. Multi-carrier users go HuanYuYun; single-carrier users pick YunTu for value.",
      ar: "YunTu (9.2) تغطية IPLC واسعة. HuanYuYun (9.6) BGP + IEPL 2.5Gbps من ¥28/شهر.",
    },
    faq: [
      {
        q: {
          zh: "云图机场 和 寰宇云机场 哪个更好？",
          en: "Which is better between 云图机场 and 寰宇云机场?",
          ar: "أيهما أفضل بين 云图机场 و 寰宇云机场؟",
        },
        a: {
          zh: "云图（9.2）覆盖 20+ 国家 IPLC 专线，中端定价；寰宇云（9.6）主打 BGP 三网优化 + IEPL 广港专线 2.5Gbps，¥28/月起。电信/联通/移动多网切换用户强推寰宇云，单一运营商用户选云图性价比更高。",
          en: "YunTu (9.2) has 20+ country IPLC coverage at mid price. HuanYuYun (9.6) leads with BGP-optimized IEPL Canton-HK links up to 2.5Gbps, ¥28+/mo. Multi-carrier users go HuanYuYun; single-carrier users pick YunTu for value.",
          ar: "YunTu (9.2) تغطية IPLC واسعة. HuanYuYun (9.6) BGP + IEPL 2.5Gbps من ¥28/شهر.",
        },
      },
      {
        q: {
          zh: "云图机场 和 寰宇云机场 价格差多少？",
          en: "How different are 云图机场 and 寰宇云机场 in price?",
          ar: "ما الفرق في السعر بين 云图机场 و 寰宇云机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "云图机场 和 寰宇云机场 都能看 Netflix 4K 吗？",
          en: "Do both 云图机场 and 寰宇云机场 support Netflix 4K?",
          ar: "هل يدعم كل من 云图机场 و 寰宇云机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "yuntu",
    slugB: "nexitally",
    winner: "nexitally",
    summary: {
      zh: "云图（9.2）走性价比稳定路线，¥12/月起；奶昔（9.9，全站最高分）是 2017 老牌顶级机场，千兆专线 + 全流媒体原生解锁，¥88/月起。预算充足追求极致速度选奶昔，日常使用云图性价比更高。",
      en: "YunTu (9.2) is value-first stability at ¥12+/mo. Nexitally (9.9, top-rated) is a 2017 veteran with gigabit dedicated + native streaming unlock at ¥88+/mo. Budget-flexible for top speed picks Nexitally; daily use picks YunTu.",
      ar: "YunTu (9.2) قيمة. Nexitally (9.9) عملاق 2017 بجيجابت من ¥88/شهر.",
    },
    faq: [
      {
        q: {
          zh: "云图机场 和 奶昔机场 哪个更好？",
          en: "Which is better between 云图机场 and 奶昔机场?",
          ar: "أيهما أفضل بين 云图机场 و 奶昔机场؟",
        },
        a: {
          zh: "云图（9.2）走性价比稳定路线，¥12/月起；奶昔（9.9，全站最高分）是 2017 老牌顶级机场，千兆专线 + 全流媒体原生解锁，¥88/月起。预算充足追求极致速度选奶昔，日常使用云图性价比更高。",
          en: "YunTu (9.2) is value-first stability at ¥12+/mo. Nexitally (9.9, top-rated) is a 2017 veteran with gigabit dedicated + native streaming unlock at ¥88+/mo. Budget-flexible for top speed picks Nexitally; daily use picks YunTu.",
          ar: "YunTu (9.2) قيمة. Nexitally (9.9) عملاق 2017 بجيجابت من ¥88/شهر.",
        },
      },
      {
        q: {
          zh: "云图机场 和 奶昔机场 价格差多少？",
          en: "How different are 云图机场 and 奶昔机场 in price?",
          ar: "ما الفرق في السعر بين 云图机场 و 奶昔机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "云图机场 和 奶昔机场 都能看 Netflix 4K 吗？",
          en: "Do both 云图机场 and 奶昔机场 support Netflix 4K?",
          ar: "هل يدعم كل من 云图机场 و 奶昔机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "yuntu",
    slugB: "wgetcloud",
    winner: "wgetcloud",
    summary: {
      zh: "云图（9.2）中端专线；WgetCloud（9.7）主打 AWS 全球加速器专线，60+ 国 300+ 节点，晚高峰 800Mbps+，¥79/月起。商务用户/外贸办公强推 WgetCloud，日常刷 ChatGPT 看 YouTube 云图完全够用。",
      en: "YunTu (9.2) mid-tier IPLC. WgetCloud (9.7) uses AWS Global Accelerator, 60+ countries, 300+ nodes, 800Mbps+ at peak, ¥79+/mo. Business/enterprise picks WgetCloud; daily use picks YunTu.",
      ar: "YunTu (9.2) متوسط. WgetCloud (9.7) AWS بـ800Mbps+، ¥79+/شهر.",
    },
    faq: [
      {
        q: {
          zh: "云图机场 和 WgetCloud 哪个更好？",
          en: "Which is better between 云图机场 and WgetCloud?",
          ar: "أيهما أفضل بين 云图机场 و WgetCloud؟",
        },
        a: {
          zh: "云图（9.2）中端专线；WgetCloud（9.7）主打 AWS 全球加速器专线，60+ 国 300+ 节点，晚高峰 800Mbps+，¥79/月起。商务用户/外贸办公强推 WgetCloud，日常刷 ChatGPT 看 YouTube 云图完全够用。",
          en: "YunTu (9.2) mid-tier IPLC. WgetCloud (9.7) uses AWS Global Accelerator, 60+ countries, 300+ nodes, 800Mbps+ at peak, ¥79+/mo. Business/enterprise picks WgetCloud; daily use picks YunTu.",
          ar: "YunTu (9.2) متوسط. WgetCloud (9.7) AWS بـ800Mbps+، ¥79+/شهر.",
        },
      },
      {
        q: {
          zh: "云图机场 和 WgetCloud 价格差多少？",
          en: "How different are 云图机场 and WgetCloud in price?",
          ar: "ما الفرق في السعر بين 云图机场 و WgetCloud؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "云图机场 和 WgetCloud 都能看 Netflix 4K 吗？",
          en: "Do both 云图机场 and WgetCloud support Netflix 4K?",
          ar: "هل يدعم كل من 云图机场 و WgetCloud Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "yuntu",
    slugB: "flyingbird",
    winner: "flyingbird",
    summary: {
      zh: "云图（9.2）2022 上线，中端专线；飞鸟（9.6，FlyingBird）多年老牌 IEPL 国际专线，晚高峰 600Mbps+，¥15/月起。老站信任度飞鸟更高，云图流媒体节点标注更清晰，两者价格相近可互相参考。",
      en: "YunTu (9.2, 2022) is a newer IPLC brand. FlyingBird (9.6) is a veteran IEPL with 600Mbps+ peak at ¥15+/mo. Veterans prefer FlyingBird for track record; YunTu edges on streaming node labeling.",
      ar: "YunTu (9.2) جديد. FlyingBird (9.6) عملاق IEPL بـ600Mbps+، ¥15+/شهر.",
    },
    faq: [
      {
        q: {
          zh: "云图机场 和 飞鸟机场 哪个更好？",
          en: "Which is better between 云图机场 and 飞鸟机场?",
          ar: "أيهما أفضل بين 云图机场 و 飞鸟机场؟",
        },
        a: {
          zh: "云图（9.2）2022 上线，中端专线；飞鸟（9.6，FlyingBird）多年老牌 IEPL 国际专线，晚高峰 600Mbps+，¥15/月起。老站信任度飞鸟更高，云图流媒体节点标注更清晰，两者价格相近可互相参考。",
          en: "YunTu (9.2, 2022) is a newer IPLC brand. FlyingBird (9.6) is a veteran IEPL with 600Mbps+ peak at ¥15+/mo. Veterans prefer FlyingBird for track record; YunTu edges on streaming node labeling.",
          ar: "YunTu (9.2) جديد. FlyingBird (9.6) عملاق IEPL بـ600Mbps+، ¥15+/شهر.",
        },
      },
      {
        q: {
          zh: "云图机场 和 飞鸟机场 价格差多少？",
          en: "How different are 云图机场 and 飞鸟机场 in price?",
          ar: "ما الفرق في السعر بين 云图机场 و 飞鸟机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "云图机场 和 飞鸟机场 都能看 Netflix 4K 吗？",
          en: "Do both 云图机场 and 飞鸟机场 support Netflix 4K?",
          ar: "هل يدعم كل من 云图机场 و 飞鸟机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "shunyun",
    slugB: "nexitally",
    winner: "nexitally",
    summary: {
      zh: "瞬云（9.2）是中转+专线混合的高性价比机场，¥16/月起；奶昔（9.9）是千兆纯专线的顶级老牌，¥88/月起。差 5.5 倍的价差换来速度上限提升 3-5 倍。速度优先选奶昔，性价比优先选瞬云。",
      en: "ShunYun (9.2) mixes transit + dedicated at ¥16+/mo. Nexitally (9.9) is gigabit pure-dedicated veteran at ¥88+/mo. 5.5× price gap buys 3-5× speed ceiling. Speed-first picks Nexitally; value-first picks ShunYun.",
      ar: "ShunYun (9.2) ¥16+/شهر. Nexitally (9.9) جيجابت ¥88+/شهر. الفارق 5.5× للسرعة 3-5×.",
    },
    faq: [
      {
        q: {
          zh: "瞬云机场 和 奶昔机场 哪个更好？",
          en: "Which is better between 瞬云机场 and 奶昔机场?",
          ar: "أيهما أفضل بين 瞬云机场 و 奶昔机场؟",
        },
        a: {
          zh: "瞬云（9.2）是中转+专线混合的高性价比机场，¥16/月起；奶昔（9.9）是千兆纯专线的顶级老牌，¥88/月起。差 5.5 倍的价差换来速度上限提升 3-5 倍。速度优先选奶昔，性价比优先选瞬云。",
          en: "ShunYun (9.2) mixes transit + dedicated at ¥16+/mo. Nexitally (9.9) is gigabit pure-dedicated veteran at ¥88+/mo. 5.5× price gap buys 3-5× speed ceiling. Speed-first picks Nexitally; value-first picks ShunYun.",
          ar: "ShunYun (9.2) ¥16+/شهر. Nexitally (9.9) جيجابت ¥88+/شهر. الفارق 5.5× للسرعة 3-5×.",
        },
      },
      {
        q: {
          zh: "瞬云机场 和 奶昔机场 价格差多少？",
          en: "How different are 瞬云机场 and 奶昔机场 in price?",
          ar: "ما الفرق في السعر بين 瞬云机场 و 奶昔机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "瞬云机场 和 奶昔机场 都能看 Netflix 4K 吗？",
          en: "Do both 瞬云机场 and 奶昔机场 support Netflix 4K?",
          ar: "هل يدعم كل من 瞬云机场 و 奶昔机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "nexitally",
    slugB: "wgetcloud",
    winner: "nexitally",
    summary: {
      zh: "两家都是高端机场：奶昔（9.9）2017 老牌，唯云自研专线，家用/娱乐向；WgetCloud（9.7）2021 商务级，AWS 加速器，外贸/远程办公向。看电影玩游戏选奶昔，办公跨国协作选 WgetCloud。",
      en: "Both are top-tier. Nexitally (9.9, since 2017) uses proprietary dedicated for home/entertainment. WgetCloud (9.7, since 2021) uses AWS Global Accelerator for business/remote work. Streaming picks Nexitally; work picks WgetCloud.",
      ar: "كلاهما راقٍ. Nexitally 2017 للمنزل. WgetCloud 2021 للأعمال.",
    },
    faq: [
      {
        q: {
          zh: "奶昔机场 和 WgetCloud 哪个更好？",
          en: "Which is better between 奶昔机场 and WgetCloud?",
          ar: "أيهما أفضل بين 奶昔机场 و WgetCloud؟",
        },
        a: {
          zh: "两家都是高端机场：奶昔（9.9）2017 老牌，唯云自研专线，家用/娱乐向；WgetCloud（9.7）2021 商务级，AWS 加速器，外贸/远程办公向。看电影玩游戏选奶昔，办公跨国协作选 WgetCloud。",
          en: "Both are top-tier. Nexitally (9.9, since 2017) uses proprietary dedicated for home/entertainment. WgetCloud (9.7, since 2021) uses AWS Global Accelerator for business/remote work. Streaming picks Nexitally; work picks WgetCloud.",
          ar: "كلاهما راقٍ. Nexitally 2017 للمنزل. WgetCloud 2021 للأعمال.",
        },
      },
      {
        q: {
          zh: "奶昔机场 和 WgetCloud 价格差多少？",
          en: "How different are 奶昔机场 and WgetCloud in price?",
          ar: "ما الفرق في السعر بين 奶昔机场 و WgetCloud؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "奶昔机场 和 WgetCloud 都能看 Netflix 4K 吗？",
          en: "Do both 奶昔机场 and WgetCloud support Netflix 4K?",
          ar: "هل يدعم كل من 奶昔机场 و WgetCloud Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "huanyuyun",
    slugB: "flyingbird",
    winner: "huanyuyun",
    summary: {
      zh: "寰宇云（9.6）BGP 三网优化 + IEPL 广港内网 2.5Gbps，¥28/月起；飞鸟（9.6）纯 IEPL 国际专线，600Mbps+，¥15/月起。国内用户看两地内网必选寰宇云，海外多地区跳板选飞鸟。",
      en: "HuanYuYun (9.6) uses BGP 3-carrier + IEPL Canton-HK intranet at 2.5Gbps, ¥28+/mo. FlyingBird (9.6) pure IEPL 600Mbps+ at ¥15+/mo. Domestic intranet picks HuanYuYun; multi-region hops pick FlyingBird.",
      ar: "HuanYuYun BGP + IEPL 2.5Gbps. FlyingBird IEPL 600Mbps+ خارجي.",
    },
    faq: [
      {
        q: {
          zh: "寰宇云机场 和 飞鸟机场 哪个更好？",
          en: "Which is better between 寰宇云机场 and 飞鸟机场?",
          ar: "أيهما أفضل بين 寰宇云机场 و 飞鸟机场؟",
        },
        a: {
          zh: "寰宇云（9.6）BGP 三网优化 + IEPL 广港内网 2.5Gbps，¥28/月起；飞鸟（9.6）纯 IEPL 国际专线，600Mbps+，¥15/月起。国内用户看两地内网必选寰宇云，海外多地区跳板选飞鸟。",
          en: "HuanYuYun (9.6) uses BGP 3-carrier + IEPL Canton-HK intranet at 2.5Gbps, ¥28+/mo. FlyingBird (9.6) pure IEPL 600Mbps+ at ¥15+/mo. Domestic intranet picks HuanYuYun; multi-region hops pick FlyingBird.",
          ar: "HuanYuYun BGP + IEPL 2.5Gbps. FlyingBird IEPL 600Mbps+ خارجي.",
        },
      },
      {
        q: {
          zh: "寰宇云机场 和 飞鸟机场 价格差多少？",
          en: "How different are 寰宇云机场 and 飞鸟机场 in price?",
          ar: "ما الفرق في السعر بين 寰宇云机场 و 飞鸟机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "寰宇云机场 和 飞鸟机场 都能看 Netflix 4K 吗？",
          en: "Do both 寰宇云机场 and 飞鸟机场 support Netflix 4K?",
          ar: "هل يدعم كل من 寰宇云机场 و 飞鸟机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "tag",
    slugB: "yuntu",
    winner: "yuntu",
    summary: {
      zh: "TAG 机场（9.3）主打家宽/住宅原生 IP + 90+ 国冷门地区节点，¥140/半年起，适合需要住宅 IP 的特殊场景；云图（9.2）标准 IPLC 专线，¥12/月起，日常场景性价比高。日常翻墙看视频选云图，跨境电商需住宅 IP 选 TAG。",
      en: "TAG (9.3) focuses on residential IPs + 90+ country niche nodes at ¥140/half-year, best for use cases needing residential IPs. YunTu (9.2) standard IPLC at ¥12+/mo for daily browsing. Daily pick YunTu; residential-IP needs pick TAG.",
      ar: "TAG (9.3) IP سكني 90+ دولة. YunTu (9.2) IPLC عادي للاستخدام اليومي.",
    },
    faq: [
      {
        q: {
          zh: "TAG 机场 和 云图机场 哪个更好？",
          en: "Which is better between TAG 机场 and 云图机场?",
          ar: "أيهما أفضل بين TAG 机场 و 云图机场؟",
        },
        a: {
          zh: "TAG 机场（9.3）主打家宽/住宅原生 IP + 90+ 国冷门地区节点，¥140/半年起，适合需要住宅 IP 的特殊场景；云图（9.2）标准 IPLC 专线，¥12/月起，日常场景性价比高。日常翻墙看视频选云图，跨境电商需住宅 IP 选 TAG。",
          en: "TAG (9.3) focuses on residential IPs + 90+ country niche nodes at ¥140/half-year, best for use cases needing residential IPs. YunTu (9.2) standard IPLC at ¥12+/mo for daily browsing. Daily pick YunTu; residential-IP needs pick TAG.",
          ar: "TAG (9.3) IP سكني 90+ دولة. YunTu (9.2) IPLC عادي للاستخدام اليومي.",
        },
      },
      {
        q: {
          zh: "TAG 机场 和 云图机场 价格差多少？",
          en: "How different are TAG 机场 and 云图机场 in price?",
          ar: "ما الفرق في السعر بين TAG 机场 و 云图机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "TAG 机场 和 云图机场 都能看 Netflix 4K 吗？",
          en: "Do both TAG 机场 and 云图机场 support Netflix 4K?",
          ar: "هل يدعم كل من TAG 机场 و 云图机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "yiyuan",
    slugB: "yuntu",
    winner: "yuntu",
    summary: {
      zh: "一元机场（5.0，警示分）是超低价 ¥6/月的月抛型机场，社区多次讨论跑路担忧，仅适合极短期应急；云图（9.2）稳定运营 3 年 IPLC 专线，¥12/月起，长期使用首选。追求便宜别贪便宜——加一点预算换稳定不会后悔。",
      en: "1Yuan (5.0, cautionary) is ¥6/mo throwaway airport with well-documented exit-scam concerns — short-term emergency only. YunTu (9.2) stable 3-year IPLC at ¥12+/mo — the sane long-term pick. A few extra ¥ buys real stability.",
      ar: "1Yuan (5.0) رخيص جداً وغير مستقر. YunTu (9.2) مستقر منذ 3 سنوات.",
    },
    faq: [
      {
        q: {
          zh: "一元机场 和 云图机场 哪个更好？",
          en: "Which is better between 一元机场 and 云图机场?",
          ar: "أيهما أفضل بين 一元机场 و 云图机场؟",
        },
        a: {
          zh: "一元机场（5.0，警示分）是超低价 ¥6/月的月抛型机场，社区多次讨论跑路担忧，仅适合极短期应急；云图（9.2）稳定运营 3 年 IPLC 专线，¥12/月起，长期使用首选。追求便宜别贪便宜——加一点预算换稳定不会后悔。",
          en: "1Yuan (5.0, cautionary) is ¥6/mo throwaway airport with well-documented exit-scam concerns — short-term emergency only. YunTu (9.2) stable 3-year IPLC at ¥12+/mo — the sane long-term pick. A few extra ¥ buys real stability.",
          ar: "1Yuan (5.0) رخيص جداً وغير مستقر. YunTu (9.2) مستقر منذ 3 سنوات.",
        },
      },
      {
        q: {
          zh: "一元机场 和 云图机场 价格差多少？",
          en: "How different are 一元机场 and 云图机场 in price?",
          ar: "ما الفرق في السعر بين 一元机场 و 云图机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "一元机场 和 云图机场 都能看 Netflix 4K 吗？",
          en: "Do both 一元机场 and 云图机场 support Netflix 4K?",
          ar: "هل يدعم كل من 一元机场 و 云图机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "yifen",
    slugB: "yuntu",
    winner: "yuntu",
    summary: {
      zh: "一分机场（¥0.1/月泛指所有一分钱试用机场）不是单一品牌，多为月抛服务器，稳定性和跑路风险高；云图（9.2）2022 上线运营至今稳定，¥12/月起，是长期使用的更稳选择。别拿账号数据赌一毛钱。",
      en: "1Fen airports (¥0.1/mo umbrella term) are typically throwaway servers with high instability and exit-scam risk. YunTu (9.2, since 2022) is a stable long-term choice at ¥12+/mo. Don't gamble your accounts for 10 cents.",
      ar: "1Fen رخيص وغير موثوق. YunTu (9.2) خيار طويل الأمد.",
    },
    faq: [
      {
        q: {
          zh: "一分机场 和 云图机场 哪个更好？",
          en: "Which is better between 一分机场 and 云图机场?",
          ar: "أيهما أفضل بين 一分机场 و 云图机场؟",
        },
        a: {
          zh: "一分机场（¥0.1/月泛指所有一分钱试用机场）不是单一品牌，多为月抛服务器，稳定性和跑路风险高；云图（9.2）2022 上线运营至今稳定，¥12/月起，是长期使用的更稳选择。别拿账号数据赌一毛钱。",
          en: "1Fen airports (¥0.1/mo umbrella term) are typically throwaway servers with high instability and exit-scam risk. YunTu (9.2, since 2022) is a stable long-term choice at ¥12+/mo. Don't gamble your accounts for 10 cents.",
          ar: "1Fen رخيص وغير موثوق. YunTu (9.2) خيار طويل الأمد.",
        },
      },
      {
        q: {
          zh: "一分机场 和 云图机场 价格差多少？",
          en: "How different are 一分机场 and 云图机场 in price?",
          ar: "ما الفرق في السعر بين 一分机场 و 云图机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "一分机场 和 云图机场 都能看 Netflix 4K 吗？",
          en: "Do both 一分机场 and 云图机场 support Netflix 4K?",
          ar: "هل يدعم كل من 一分机场 و 云图机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
  {
    slugA: "nexitally",
    slugB: "flyingbird",
    winner: "nexitally",
    summary: {
      zh: "两家都是老牌 IEPL 专线：奶昔（9.9）2017 顶级唯云专线千兆带宽 ¥88/月起；飞鸟（9.6）中低价 IEPL 国际专线 600Mbps+，¥15/月起。极致速度选奶昔，日常够用选飞鸟。",
      en: "Both are veteran IEPL brands. Nexitally (9.9, since 2017) top-tier gigabit at ¥88+/mo. FlyingBird (9.6) mid-low IEPL 600Mbps+ at ¥15+/mo. Top speed picks Nexitally; daily use picks FlyingBird.",
      ar: "كلاهما IEPL عملاق. Nexitally جيجابت. FlyingBird 600Mbps+ اقتصادي.",
    },
    faq: [
      {
        q: {
          zh: "奶昔机场 和 飞鸟机场 哪个更好？",
          en: "Which is better between 奶昔机场 and 飞鸟机场?",
          ar: "أيهما أفضل بين 奶昔机场 و 飞鸟机场؟",
        },
        a: {
          zh: "两家都是老牌 IEPL 专线：奶昔（9.9）2017 顶级唯云专线千兆带宽 ¥88/月起；飞鸟（9.6）中低价 IEPL 国际专线 600Mbps+，¥15/月起。极致速度选奶昔，日常够用选飞鸟。",
          en: "Both are veteran IEPL brands. Nexitally (9.9, since 2017) top-tier gigabit at ¥88+/mo. FlyingBird (9.6) mid-low IEPL 600Mbps+ at ¥15+/mo. Top speed picks Nexitally; daily use picks FlyingBird.",
          ar: "كلاهما IEPL عملاق. Nexitally جيجابت. FlyingBird 600Mbps+ اقتصادي.",
        },
      },
      {
        q: {
          zh: "奶昔机场 和 飞鸟机场 价格差多少？",
          en: "How different are 奶昔机场 and 飞鸟机场 in price?",
          ar: "ما الفرق في السعر بين 奶昔机场 و 飞鸟机场؟",
        },
        a: {
          zh: "详见页面顶部的定价卡对比，两家在月付、季付、年付都有不同分级方案。年付通常有 20-40% 折扣，追求长期使用可以直接年付。",
          en: "See the pricing cards near the top. Both offer monthly, quarterly, and annual tiers with 20-40% annual discount. Long-term users should go annual.",
          ar: "انظر بطاقات التسعير أعلى الصفحة. كلاهما يقدم خططاً شهرية وربع سنوية وسنوية بخصم 20-40٪ للسنوي.",
        },
      },
      {
        q: {
          zh: "奶昔机场 和 飞鸟机场 都能看 Netflix 4K 吗？",
          en: "Do both 奶昔机场 and 飞鸟机场 support Netflix 4K?",
          ar: "هل يدعم كل من 奶昔机场 و 飞鸟机场 Netflix 4K؟",
        },
        a: {
          zh: "两家都提供标注的流媒体解锁节点，Netflix / Disney+ / YouTube Premium 都能正常播放 4K。带宽建议选 IPLC 专线节点，跑满 25-45 Mbps 无缓冲。",
          en: "Both provide labeled streaming-unlock nodes for Netflix / Disney+ / YouTube Premium in 4K. Use IPLC dedicated-line nodes for full 25-45 Mbps unbuffered playback.",
          ar: "كلاهما يقدم عقد فتح للبث Netflix / Disney+ / YouTube Premium بجودة 4K. استخدم خطوط IPLC للحصول على 25-45 Mbps بدون تخزين مؤقت.",
        },
      },
    ],
  },
];

export function getBrandComparePair(pair: string): BrandComparePair | undefined {
  const [a, , b] = pair.split("-vs-");
  return BRAND_COMPARE_PAIRS.find((p) => p.slugA === a && p.slugB === b);
}

export const BRAND_COMPARE_SLUGS: string[] = BRAND_COMPARE_PAIRS.map((p) => `${p.slugA}-vs-${p.slugB}`);