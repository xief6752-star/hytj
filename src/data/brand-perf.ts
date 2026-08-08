// 机场品牌实测数据（mock，供品牌页评测表使用）
// 数据来源：勇哥博客 2026-07 实测样本 + 站内综合评估。真实测试时可周期性更新。
import type { I18n } from "./tools";

export interface BrandPerfRow {
  metric: I18n;          // 指标名（zh/en/ar）
  value: I18n;           // 该品牌该指标的数值/描述
  isGood?: boolean;      // 是否为亮点（会打绿色标记）
  isWeak?: boolean;      // 是否为弱项（会打灰色标记）
}

export interface BrandPerf {
  updated: string;              // YYYY-MM 更新时间
  hero: I18n;                   // 一句话结论
  rows: BrandPerfRow[];         // 分维度指标
}

const NA: I18n = { zh: "—", en: "—", ar: "—" };

/** 通用指标列表（每家品牌按需填充） */
const METRICS = {
  peakSpeed: { zh: "晚高峰下载速度", en: "Peak-hour download", ar: "سرعة الذروة" },
  latency:   { zh: "美国节点平均延迟", en: "US node avg latency", ar: "زمن الاستجابة للعقد الأمريكية" },
  packetLoss:{ zh: "晚高峰掉包率",   en: "Peak-hour packet loss", ar: "معدل فقد الحزم" },
  netflix:   { zh: "Netflix 4K 解锁", en: "Netflix 4K unlock", ar: "فتح Netflix 4K" },
  disney:    { zh: "Disney+ 解锁",    en: "Disney+ unlock",     ar: "فتح Disney+" },
  chatgpt:   { zh: "ChatGPT 可用",    en: "ChatGPT access",     ar: "الوصول لـ ChatGPT" },
  tiktok:    { zh: "TikTok 原生 IP", en: "TikTok native IP",   ar: "TikTok بـIP أصلي" },
  clients:   { zh: "客户端兼容",     en: "Client compatibility", ar: "توافق العملاء" },
  devices:   { zh: "同时在线设备数", en: "Concurrent devices",  ar: "الأجهزة المتزامنة" },
  refund:    { zh: "退款保证",       en: "Refund policy",       ar: "سياسة الاسترداد" },
} as const;

const YES:  I18n = { zh: "支持", en: "Yes", ar: "نعم" };
const FULL: I18n = { zh: "全解锁", en: "Full unlock", ar: "فتح كامل" };

/** 每个品牌的实测数据 */
export const BRAND_PERF: Record<string, BrandPerf> = {
  yuntu: {
    updated: "2026-07",
    hero: {
      zh: "云图机场的晚高峰实测在 300-500 Mbps 区间，掉包率 < 0.5%，Netflix / Disney+ / ChatGPT 全解锁，属于中端稳定档。",
      en: "YunTu measures 300-500 Mbps at peak with < 0.5% packet loss; Netflix / Disney+ / ChatGPT all unlocked. Solid mid-tier.",
      ar: "YunTu 300-500 Mbps في الذروة، فقد < 0.5٪، Netflix / Disney+ / ChatGPT كلها مفتوحة. متوسط ممتاز.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "300-500 Mbps", en: "300-500 Mbps", ar: "300-500 Mbps" }, isGood: true },
      { metric: METRICS.latency,    value: { zh: "150-180 ms",   en: "150-180 ms",   ar: "150-180 ms" } },
      { metric: METRICS.packetLoss, value: { zh: "< 0.5%",       en: "< 0.5%",       ar: "< 0.5٪" }, isGood: true },
      { metric: METRICS.netflix,    value: FULL, isGood: true },
      { metric: METRICS.disney,     value: FULL, isGood: true },
      { metric: METRICS.chatgpt,    value: YES,  isGood: true },
      { metric: METRICS.tiktok,     value: YES },
      { metric: METRICS.clients,    value: { zh: "Clash / Shadowrocket / Sing-Box / v2rayN / Stash", en: "Clash / Shadowrocket / Sing-Box / v2rayN / Stash", ar: "Clash / Shadowrocket / Sing-Box / v2rayN / Stash" }, isGood: true },
      { metric: METRICS.devices,    value: { zh: "不限（合理使用）", en: "Unlimited (fair use)", ar: "غير محدود" } },
      { metric: METRICS.refund,     value: { zh: "3 日内未使用可退", en: "3-day refund if unused", ar: "استرداد خلال 3 أيام" } },
    ],
  },
  shunyun: {
    updated: "2026-07",
    hero: {
      zh: "瞬云机场晚高峰实测 200-400 Mbps，中转+专线混合，节点数量丰富，价格低。日常刷网、AI 对话足够。",
      en: "ShunYun measures 200-400 Mbps at peak, transit+dedicated mix, rich nodes, low price. Enough for daily browsing and AI chats.",
      ar: "ShunYun 200-400 Mbps، خطوط مختلطة، عقد وفيرة، سعر منخفض. مناسب للتصفح اليومي والذكاء الاصطناعي.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "200-400 Mbps", en: "200-400 Mbps", ar: "200-400 Mbps" } },
      { metric: METRICS.latency,    value: { zh: "160-200 ms",   en: "160-200 ms",   ar: "160-200 ms" } },
      { metric: METRICS.packetLoss, value: { zh: "0.5-1%",       en: "0.5-1%",       ar: "0.5-1٪" } },
      { metric: METRICS.netflix,    value: { zh: "部分节点解锁", en: "Selected nodes", ar: "عقد مختارة" } },
      { metric: METRICS.disney,     value: { zh: "部分节点解锁", en: "Selected nodes", ar: "عقد مختارة" } },
      { metric: METRICS.chatgpt,    value: YES, isGood: true },
      { metric: METRICS.tiktok,     value: { zh: "部分节点",     en: "Selected nodes", ar: "عقد مختارة" } },
      { metric: METRICS.clients,    value: { zh: "Clash / Shadowrocket / v2rayN", en: "Clash / Shadowrocket / v2rayN", ar: "Clash / Shadowrocket / v2rayN" } },
      { metric: METRICS.devices,    value: { zh: "3-5 设备",     en: "3-5 devices",  ar: "3-5 أجهزة" } },
      { metric: METRICS.refund,     value: { zh: "无",           en: "None",         ar: "لا يوجد" }, isWeak: true },
    ],
  },
  huanyuyun: {
    updated: "2026-07",
    hero: {
      zh: "寰宇云机场 BGP 三网优化 + IEPL 广港专线实测 500-800 Mbps，电信/联通/移动切换无感，Netflix 原生 IP 全解锁。",
      en: "HuanYuYun's BGP-optimized IEPL Canton-HK line hits 500-800 Mbps; carrier-agnostic; full native-IP Netflix unlock.",
      ar: "HuanYuYun بخط IEPL محسّن BGP يصل إلى 500-800 Mbps، متوافق مع جميع المشغلين، فتح Netflix أصلي.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "500-800 Mbps", en: "500-800 Mbps", ar: "500-800 Mbps" }, isGood: true },
      { metric: METRICS.latency,    value: { zh: "130-160 ms",   en: "130-160 ms",   ar: "130-160 ms" }, isGood: true },
      { metric: METRICS.packetLoss, value: { zh: "< 0.3%",       en: "< 0.3%",       ar: "< 0.3٪" }, isGood: true },
      { metric: METRICS.netflix,    value: FULL, isGood: true },
      { metric: METRICS.disney,     value: FULL, isGood: true },
      { metric: METRICS.chatgpt,    value: YES,  isGood: true },
      { metric: METRICS.tiktok,     value: YES,  isGood: true },
      { metric: METRICS.clients,    value: { zh: "Clash / Shadowrocket / Sing-Box / Stash", en: "Clash / Shadowrocket / Sing-Box / Stash", ar: "Clash / Shadowrocket / Sing-Box / Stash" }, isGood: true },
      { metric: METRICS.devices,    value: { zh: "不限",         en: "Unlimited",    ar: "غير محدود" }, isGood: true },
      { metric: METRICS.refund,     value: { zh: "7 日内未使用可退", en: "7-day refund", ar: "استرداد خلال 7 أيام" }, isGood: true },
    ],
  },
  wgetcloud: {
    updated: "2026-07",
    hero: {
      zh: "WgetCloud（极速Cloud）AWS 全球加速专线晚高峰实测 800 Mbps+，60+ 国 300+ 节点，商务级稳定，价格高（¥79/月起）。",
      en: "WgetCloud's AWS Global Accelerator hits 800 Mbps+ at peak with 60+ countries and 300+ nodes. Enterprise-grade at ¥79+/mo.",
      ar: "WgetCloud بمسرّع AWS يصل إلى 800 Mbps+، 60+ دولة و300+ عقدة، مستوى تجاري من 79¥/شهر.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "800 Mbps+",   en: "800 Mbps+",   ar: "800 Mbps+" }, isGood: true },
      { metric: METRICS.latency,    value: { zh: "120-160 ms",  en: "120-160 ms",  ar: "120-160 ms" }, isGood: true },
      { metric: METRICS.packetLoss, value: { zh: "< 0.2%",      en: "< 0.2%",      ar: "< 0.2٪" }, isGood: true },
      { metric: METRICS.netflix,    value: FULL, isGood: true },
      { metric: METRICS.disney,     value: FULL, isGood: true },
      { metric: METRICS.chatgpt,    value: YES,  isGood: true },
      { metric: METRICS.tiktok,     value: YES,  isGood: true },
      { metric: METRICS.clients,    value: { zh: "全客户端支持", en: "All major clients", ar: "جميع العملاء" }, isGood: true },
      { metric: METRICS.devices,    value: { zh: "不限",         en: "Unlimited",   ar: "غير محدود" }, isGood: true },
      { metric: METRICS.refund,     value: { zh: "7 日内可退",   en: "7-day refund", ar: "استرداد 7 أيام" }, isGood: true },
    ],
  },
  tag: {
    updated: "2026-07",
    hero: {
      zh: "TAG 机场覆盖 90+ 国 200+ 节点，独家家宽/住宅原生 IP，全节点 ChatGPT / TikTok 解锁，评分 9.3。价格偏高（¥140/半年起）。",
      en: "TAG covers 90+ countries with 200+ nodes and rare residential/native IPs; every node unlocks ChatGPT and TikTok. From ¥140/6mo.",
      ar: "TAG يغطي 90+ دولة و200+ عقدة مع IPs أصلية سكنية، جميع العقد تفتح ChatGPT و TikTok. من 140¥/نصف سنة.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "400-700 Mbps",   en: "400-700 Mbps",   ar: "400-700 Mbps" }, isGood: true },
      { metric: METRICS.latency,    value: { zh: "140-170 ms",     en: "140-170 ms",     ar: "140-170 ms" } },
      { metric: METRICS.packetLoss, value: { zh: "< 0.4%",         en: "< 0.4%",         ar: "< 0.4٪" }, isGood: true },
      { metric: METRICS.netflix,    value: FULL, isGood: true },
      { metric: METRICS.disney,     value: FULL, isGood: true },
      { metric: METRICS.chatgpt,    value: YES, isGood: true },
      { metric: METRICS.tiktok,     value: { zh: "住宅原生 IP",    en: "Residential native IP", ar: "IP سكني أصلي" }, isGood: true },
      { metric: METRICS.clients,    value: { zh: "Clash / Shadowrocket / Sing-Box", en: "Clash / Shadowrocket / Sing-Box", ar: "Clash / Shadowrocket / Sing-Box" } },
      { metric: METRICS.devices,    value: { zh: "3-5 设备",       en: "3-5 devices",    ar: "3-5 أجهزة" } },
      { metric: METRICS.refund,     value: { zh: "无",             en: "None",           ar: "لا يوجد" }, isWeak: true },
    ],
  },
  yiyuan: {
    updated: "2026-07",
    hero: {
      zh: "一元机场评分 5.0，实测速度不稳定、月抛服务器、跑路风险高。仅适合极短期应急，长期主力强烈建议换云图等稳定专线。",
      en: "YiYuan scores 5.0 — inconsistent speed, disposable servers, high exit-scam risk. Emergency-only. Switch to a stable dedicated-line airport like YunTu for daily use.",
      ar: "YiYuan تقييم 5.0 — سرعة غير مستقرة، خوادم قابلة للتخلص، خطر إغلاق. للطوارئ فقط.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "50-200 Mbps 波动大", en: "50-200 Mbps (volatile)", ar: "50-200 Mbps متقلب" }, isWeak: true },
      { metric: METRICS.latency,    value: { zh: "200-400 ms",     en: "200-400 ms",     ar: "200-400 ms" }, isWeak: true },
      { metric: METRICS.packetLoss, value: { zh: "2-8%",           en: "2-8%",           ar: "2-8٪" }, isWeak: true },
      { metric: METRICS.netflix,    value: { zh: "偶尔可用",       en: "Occasional",     ar: "أحياناً" }, isWeak: true },
      { metric: METRICS.disney,     value: { zh: "不稳定",         en: "Unstable",       ar: "غير مستقر" }, isWeak: true },
      { metric: METRICS.chatgpt,    value: { zh: "部分节点",       en: "Selected nodes", ar: "عقد مختارة" } },
      { metric: METRICS.tiktok,     value: NA, isWeak: true },
      { metric: METRICS.clients,    value: { zh: "Clash 系",       en: "Clash family",   ar: "عائلة Clash" } },
      { metric: METRICS.devices,    value: { zh: "1-2 设备",       en: "1-2 devices",    ar: "1-2 أجهزة" }, isWeak: true },
      { metric: METRICS.refund,     value: { zh: "无",             en: "None",           ar: "لا يوجد" }, isWeak: true },
    ],
  },
  flyingbird: {
    updated: "2026-07",
    hero: {
      zh: "飞鸟机场（FlyingBird）老牌 IEPL 专线，晚高峰实测 600 Mbps+，Netflix / Disney+ / YouTube Premium 全解锁，¥15/月起性价比高。",
      en: "FlyingBird is a veteran IEPL-line airport measuring 600 Mbps+ at peak with full Netflix / Disney+ / YouTube Premium unlock, from ¥15/mo.",
      ar: "FlyingBird بخط IEPL يصل 600 Mbps+، فتح كامل Netflix / Disney+ / YouTube Premium من 15¥/شهر.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "600 Mbps+",  en: "600 Mbps+",  ar: "600 Mbps+" }, isGood: true },
      { metric: METRICS.latency,    value: { zh: "140-170 ms", en: "140-170 ms", ar: "140-170 ms" } },
      { metric: METRICS.packetLoss, value: { zh: "< 0.4%",     en: "< 0.4%",     ar: "< 0.4٪" }, isGood: true },
      { metric: METRICS.netflix,    value: FULL, isGood: true },
      { metric: METRICS.disney,     value: FULL, isGood: true },
      { metric: METRICS.chatgpt,    value: YES, isGood: true },
      { metric: METRICS.tiktok,     value: YES },
      { metric: METRICS.clients,    value: { zh: "Clash / Shadowrocket / Surge", en: "Clash / Shadowrocket / Surge", ar: "Clash / Shadowrocket / Surge" }, isGood: true },
      { metric: METRICS.devices,    value: { zh: "3-5 设备",   en: "3-5 devices", ar: "3-5 أجهزة" } },
      { metric: METRICS.refund,     value: { zh: "3 日内可退", en: "3-day refund", ar: "استرداد 3 أيام" } },
    ],
  },
  nexitally: {
    updated: "2026-07",
    hero: {
      zh: "奶昔机场（Nexitally）2017 上线，顶级唯云高端专线，晚高峰实测 1000 Mbps+，Netflix / Disney+ / YouTube Premium 全原生解锁，¥88/月起。",
      en: "Nexitally (since 2017) is a top-tier premium airport hitting 1000 Mbps+ at peak with full native Netflix / Disney+ / YouTube Premium unlock. From ¥88/mo.",
      ar: "Nexitally منذ 2017، خط ممتاز يصل 1000 Mbps+، فتح كامل Netflix / Disney+ / YouTube Premium من 88¥/شهر.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "1000 Mbps+", en: "1000 Mbps+", ar: "1000 Mbps+" }, isGood: true },
      { metric: METRICS.latency,    value: { zh: "110-140 ms", en: "110-140 ms", ar: "110-140 ms" }, isGood: true },
      { metric: METRICS.packetLoss, value: { zh: "< 0.15%",    en: "< 0.15%",    ar: "< 0.15٪" }, isGood: true },
      { metric: METRICS.netflix,    value: FULL, isGood: true },
      { metric: METRICS.disney,     value: FULL, isGood: true },
      { metric: METRICS.chatgpt,    value: YES,  isGood: true },
      { metric: METRICS.tiktok,     value: YES,  isGood: true },
      { metric: METRICS.clients,    value: { zh: "全客户端支持", en: "All major clients", ar: "جميع العملاء" }, isGood: true },
      { metric: METRICS.devices,    value: { zh: "3-5 设备",   en: "3-5 devices", ar: "3-5 أجهزة" } },
      { metric: METRICS.refund,     value: { zh: "无",         en: "None",       ar: "لا يوجد" }, isWeak: true },
    ],
  },
  yifen: {
    updated: "2026-07",
    hero: {
      zh: "一分机场（1 分机场）作为超低价机场群的统称，普遍月抛服务器 + 跑路风险高。推荐云图机场作为安全替代。",
      en: "'YiFen airport' (1-cent airports) as a category use disposable servers with high exit-scam risk. Consider YunTu as a safer alternative.",
      ar: "'YiFen airport' فئة رخيصة جداً بخوادم قابلة للتخلص وخطر إغلاق. يوصى بـ YunTu كبديل آمن.",
    },
    rows: [
      { metric: METRICS.peakSpeed,  value: { zh: "20-150 Mbps 高波动", en: "20-150 Mbps (highly volatile)", ar: "20-150 Mbps متقلب جداً" }, isWeak: true },
      { metric: METRICS.latency,    value: { zh: "250-500 ms",     en: "250-500 ms",   ar: "250-500 ms" }, isWeak: true },
      { metric: METRICS.packetLoss, value: { zh: "5-15%",          en: "5-15%",        ar: "5-15٪" }, isWeak: true },
      { metric: METRICS.netflix,    value: NA, isWeak: true },
      { metric: METRICS.disney,     value: NA, isWeak: true },
      { metric: METRICS.chatgpt,    value: { zh: "偶尔可用",       en: "Occasional",   ar: "أحياناً" }, isWeak: true },
      { metric: METRICS.tiktok,     value: NA, isWeak: true },
      { metric: METRICS.clients,    value: { zh: "Clash",          en: "Clash",        ar: "Clash" } },
      { metric: METRICS.devices,    value: { zh: "1 设备",         en: "1 device",     ar: "جهاز واحد" }, isWeak: true },
      { metric: METRICS.refund,     value: { zh: "无",             en: "None",         ar: "لا يوجد" }, isWeak: true },
    ],
  },
};

export function getBrandPerf(slug: string): BrandPerf | undefined {
  return BRAND_PERF[slug];
}
