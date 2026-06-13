// ============================================================
// تطبيق أوفر (Awfer) — بيانات البيك الموحدة
// مقارنة الأسعار عبر 4 منصات: هنقرستيشن، كيتا، تويو، مستر مندوب
// المصدر: لقطات شاشة حقيقية من التطبيقات — يونيو 2025/2026
// الصور: مجلد   المرفق (مقصوصة من اللقطات الأصلية)
// ============================================================
// hs = هنقرستيشن | keeta = كيتا | toyou = تويو | mandoob = مستر مندوب
// null = الصنف غير متوفر على هذه المنصة (أو السعر غير مرصود)
// ============================================================

export const PLATFORMS = {
  hs: {
    name: 'هنقرستيشن',
    nameEn: 'HungerStation',
    color: '#FFD200',
    deliveryFee: 11.0,
    eta: '35-50 دقيقة',
    minOrder: 15.0,
    pricingModel: 'أسعار مرفوعة عن المحل (~20-30%)',
  },
  keeta: {
    name: 'كيتا',
    nameEn: 'Keeta',
    color: '#FFC900',
    deliveryFee: 9.0, // بعد خصم 4 من 13
    eta: '17 دقيقة',
    minOrder: 30.0,
    pricingModel: 'أسعار مرفوعة عن المحل (~20-30%)',
    notes: 'الأسرع توصيلاً والأكثر تنوعاً (وجبات جمبري وسمك وفطور)',
  },
  toyou: {
    name: 'تويو',
    nameEn: 'ToYou',
    color: '#6C5CE7',
    deliveryFee: 9.0, // بعد خصم من 25
    eta: '44-53 دقيقة',
    minOrder: 55.0,
    pricingModel: 'أسعار مرفوعة عن المحل لكن أقل من المنافسين بـ 0.5-1.5 ريال',
  },
  mandoob: {
    name: 'مستر مندوب',
    nameEn: 'Mr Mandoob',
    color: '#16A28A',
    logo: ' logo-mandoob.jpg',
    deliveryFee: 23.0, // 20 + 3 ضريبة، شامل الضريبة
    eta: null, // غير مرصود
    minOrder: null, // غير مرصود
    pricingModel: 'سعر المحل المحلي بدون أي زيادة على المنتجات',
    notes: 'الكوبونات تخصم من رسوم التوصيل فقط',
  },
};

// ------------------------------------------------------------
// الأصناف — السعر بالريال السعودي لكل منصة
// image: مسار الصورة في مجلد   (null إذا لا توجد صورة)
// الأصناف الحرّاق تستخدم صورة النسخة العادية نفسها
// ------------------------------------------------------------

export const ALBAIK_ITEMS = [
  // ===== وجبات الدجاج =====
  { id: 'chicken-meal-4pc', name: 'وجبة دجاج البيك 4 قطع', category: 'وجبات دجاج', image: ' chicken-meal-4pc.jpg', prices: { hs: 22, keeta: 22, toyou: 22, mandoob: 18 } },
  { id: 'chicken-meal-4pc-spicy', name: 'وجبة دجاج البيك حراق 4 قطع', category: 'وجبات دجاج', image: ' chicken-meal-4pc.jpg', prices: { hs: 22, keeta: 22, toyou: 22, mandoob: null } },
  { id: 'chicken-meal-8pc', name: 'وجبة دجاج البيك 8 قطع', category: 'وجبات دجاج', image: ' chicken-meal-8pc.jpg', prices: { hs: null, keeta: 42, toyou: null, mandoob: 35 } },
  { id: 'chicken-meal-8pc-spicy', name: 'وجبة دجاج البيك حراق 8 قطع', category: 'وجبات دجاج', image: ' chicken-meal-8pc.jpg', prices: { hs: null, keeta: 42, toyou: null, mandoob: null } },
  { id: 'nuggets-meal-10pc', name: 'وجبة دجاج مسحب 10 قطع', category: 'وجبات دجاج', image: ' nuggets-meal-10pc.jpg', prices: { hs: 22, keeta: 22, toyou: 22, mandoob: 18 } },
  { id: 'nuggets-meal-10pc-spicy', name: 'وجبة دجاج مسحب حراق 10 قطع', category: 'وجبات دجاج', image: ' nuggets-meal-10pc.jpg', prices: { hs: 22, keeta: 22, toyou: 22, mandoob: null } },
  { id: 'nuggets-meal-7pc', name: 'وجبة دجاج مسحب 7 قطع', category: 'وجبات دجاج', image: ' nuggets-meal-7pc.jpg', prices: { hs: 20, keeta: 20, toyou: 20, mandoob: 15 } },
  { id: 'nuggets-meal-7pc-spicy', name: 'وجبة دجاج مسحب حراق 7 قطع', category: 'وجبات دجاج', image: ' nuggets-meal-7pc.jpg', prices: { hs: 20, keeta: 20, toyou: null, mandoob: null } },
  { id: 'cheese-burger-pickles-meal', name: 'وجبة برجر بالجبنة مع بيكيز', category: 'وجبات دجاج', image: ' cheese-burger-pickles-meal.jpg', prices: { hs: null, keeta: null, toyou: null, mandoob: 12.5 } },

  // ===== ساندوتشات الدجاج =====
  { id: 'chicken-fillet-burger', name: 'برجر فيليه دجاج', category: 'ساندوتشات دجاج', image: ' chicken-fillet-burger.jpg', prices: { hs: 7, keeta: 7, toyou: 6.5, mandoob: 5.5 } },
  { id: 'chicken-fillet-burger-spicy', name: 'برجر فيليه دجاج حراق', category: 'ساندوتشات دجاج', image: ' chicken-fillet-burger.jpg', prices: { hs: 7, keeta: 7, toyou: 7, mandoob: null } },
  { id: 'big-baik', name: 'بيج بيك', category: 'ساندوتشات دجاج', image: ' big-baik.jpg', prices: { hs: null, keeta: null, toyou: 16, mandoob: null } }, // سعر مندوب غير ظاهر في اللقطة
  { id: 'big-baik-spicy', name: 'بيج بيك حراق', category: 'ساندوتشات دجاج', image: ' big-baik.jpg', prices: { hs: 17.5, keeta: 17.5, toyou: 16, mandoob: null } },
  { id: 'big-baik-cheese', name: 'بيج بيك بالجبنة', category: 'ساندوتشات دجاج', image: ' big-baik-cheese.jpg', prices: { hs: null, keeta: 18, toyou: null, mandoob: 16 } },
  { id: 'double-baik', name: 'دبل بيك', category: 'ساندوتشات دجاج', image: ' double-baik.jpg', prices: { hs: 10.5, keeta: 10.5, toyou: 10, mandoob: 9 } },
  { id: 'double-baik-spicy', name: 'دبل بيك حراق', category: 'ساندوتشات دجاج', image: ' double-baik.jpg', prices: { hs: 10.5, keeta: 10.5, toyou: null, mandoob: null } },
  { id: 'crispy-baik-fillet', name: 'كرسبي بيك فيليه', category: 'ساندوتشات دجاج', image: null, prices: { hs: 8, keeta: 8, toyou: 8, mandoob: null } },
  { id: 'crispy-baik-fillet-spicy', name: 'كرسبي بيك فيليه حراق', category: 'ساندوتشات دجاج', image: null, prices: { hs: 8, keeta: 8, toyou: 8, mandoob: null } },
  { id: 'double-crispy-baik', name: 'دبل كرسبي بيك', category: 'ساندوتشات دجاج', image: null, prices: { hs: 15.5, keeta: 15.5, toyou: 15.5, mandoob: null } },
  { id: 'double-crispy-baik-spicy', name: 'دبل كرسبي بيك حراق', category: 'ساندوتشات دجاج', image: null, prices: { hs: 15.5, keeta: 15.5, toyou: null, mandoob: null } },
  { id: 'chicken-fillet-sandwich', name: 'ساندوتش فيليه الدجاج', category: 'ساندوتشات دجاج', image: ' chicken-fillet-sandwich.jpg', prices: { hs: 10.5, keeta: 10.5, toyou: 9.5, mandoob: 7.5 } },
  { id: 'chicken-fillet-sandwich-spicy', name: 'ساندوتش فيليه الدجاج حراق', category: 'ساندوتشات دجاج', image: ' chicken-fillet-sandwich.jpg', prices: { hs: 10.5, keeta: 10.5, toyou: 9.5, mandoob: null } },
  { id: 'tawook', name: 'طاووق', category: 'ساندوتشات دجاج', image: ' tawook.jpg', prices: { hs: 10.5, keeta: 10.5, toyou: null, mandoob: 7.5 } },
  { id: 'tawook-spicy', name: 'طاووق حراق', category: 'ساندوتشات دجاج', image: ' tawook.jpg', prices: { hs: 10.5, keeta: 10.5, toyou: null, mandoob: null } },
  { id: 'saj-d-lite', name: 'صاج دي لايت مع صلصة الدي لايت', category: 'ساندوتشات دجاج', image: ' saj-d-lite.jpg', prices: { hs: 10.5, keeta: null, toyou: null, mandoob: 7.5 } },
  { id: 'saj-d-lite-spicy', name: 'صاج دي لايت حراق', category: 'ساندوتشات دجاج', image: ' saj-d-lite.jpg', prices: { hs: 10.5, keeta: 10.5, toyou: null, mandoob: null } },
  { id: 'shawarma-garlic', name: 'شاورما البيك بصلصة الثوم', category: 'ساندوتشات دجاج', image: ' shawarma-garlic.jpg', prices: { hs: 8.5, keeta: 8.5, toyou: 7.5, mandoob: 6 } },
  { id: 'shawarma-spicy', name: 'شاورما البيك حراق', category: 'ساندوتشات دجاج', image: ' shawarma-garlic.jpg', prices: { hs: 8.5, keeta: 8.5, toyou: null, mandoob: null } },
  { id: 'shawarma-tahini', name: 'شاورما البيك بصلصة الطحينة', category: 'ساندوتشات دجاج', image: ' shawarma-tahini.jpg', prices: { hs: null, keeta: null, toyou: null, mandoob: 6 } },
  { id: 'super-baik-grilled', name: 'سوبر بيك دجاج مشوي', category: 'ساندوتشات دجاج', image: ' super-baik-grilled-chicken.jpg', prices: { hs: 19.5, keeta: 19.5, toyou: 19.5, mandoob: 15 } },
  { id: 'super-baik-grilled-spicy', name: 'سوبر بيك دجاج مشوي حراق', category: 'ساندوتشات دجاج', image: ' super-baik-grilled-chicken.jpg', prices: { hs: 19.5, keeta: 19.5, toyou: 19.5, mandoob: null } },
  { id: 'pickies-burger-halibo', name: 'برجر بيكيز بصلصة هاليبو', category: 'ساندوتشات دجاج', image: null, prices: { hs: 10.5, keeta: 10.5, toyou: 10, mandoob: null } },
  { id: 'pickies-breasts', name: 'بيكيز صدور الدجاج', category: 'ساندوتشات دجاج', image: ' pickies-breasts.jpg', prices: { hs: null, keeta: 16.5, toyou: 15.5, mandoob: 13 } },
  { id: 'pickies-breasts-spicy', name: 'بيكيز صدور الدجاج الحراق', category: 'ساندوتشات دجاج', image: ' pickies-breasts.jpg', prices: { hs: null, keeta: 16.5, toyou: null, mandoob: null } },
  { id: 'pickies-thighs', name: 'بيكيز أفخاذ الدجاج', category: 'ساندوتشات دجاج', image: ' pickies-thighs.jpg', prices: { hs: null, keeta: null, toyou: null, mandoob: 13 } },

  // ===== السمك =====
  { id: 'fish-fillet-burger', name: 'برجر فيليه سمك', category: 'مأكولات بحرية', image: null, prices: { hs: 8.5, keeta: 8.5, toyou: 7.5, mandoob: null } },
  { id: 'fish-fillet-sandwich', name: 'ساندوتش فيليه سمك', category: 'مأكولات بحرية', image: ' fish-fillet-sandwich.jpg', prices: { hs: 12, keeta: 12, toyou: 11, mandoob: 8.5 } },
  { id: 'fish-fillet-sandwich-spicy', name: 'ساندوتش فيليه سمك حراق', category: 'مأكولات بحرية', image: ' fish-fillet-sandwich.jpg', prices: { hs: 12, keeta: 12, toyou: null, mandoob: null } },
  { id: 'fish-fillet-meal-6pc', name: 'وجبة فيليه السمك 6 قطع', category: 'مأكولات بحرية', image: ' fish-fillet-meal.jpg', prices: { hs: null, keeta: 30.5, toyou: 28.5, mandoob: 24.5 } },
  { id: 'fish-fillet-meal-spicy-10pc', name: 'وجبة فيليه السمك الحراق 10 قطع', category: 'مأكولات بحرية', image: ' fish-fillet-meal.jpg', prices: { hs: null, keeta: 27.5, toyou: 25.5, mandoob: null } },
  { id: 'fish-fillet-offer', name: 'فيليه سمك (عرض مقرمش وطري)', category: 'مأكولات بحرية', image: ' fish-fillet-offer.jpg', prices: { hs: null, keeta: null, toyou: null, mandoob: 22.5 } },

  // ===== الجمبري =====
  { id: 'shrimp-sandwich', name: 'ساندوتش جمبري', category: 'مأكولات بحرية', image: ' shrimp-sandwich.jpg', prices: { hs: 16, keeta: 16, toyou: 15, mandoob: 11.5 } },
  { id: 'shrimp-sandwich-spicy', name: 'ساندوتش جمبري حراق', category: 'مأكولات بحرية', image: ' shrimp-sandwich.jpg', prices: { hs: 16, keeta: 16, toyou: null, mandoob: null } },
  { id: 'super-baik-shrimp', name: 'سوبر بيك جمبري', category: 'مأكولات بحرية', image: ' super-baik-shrimp.jpg', prices: { hs: 24.5, keeta: 24.5, toyou: 24.5, mandoob: 20.5 } },
  { id: 'super-baik-shrimp-spicy', name: 'سوبر بيك جمبري الحراق', category: 'مأكولات بحرية', image: ' super-baik-shrimp.jpg', prices: { hs: 24.5, keeta: 24.5, toyou: 24.5, mandoob: null } },
  { id: 'economy-shrimp-meal', name: 'وجبة الجمبري الاقتصادية', category: 'مأكولات بحرية', image: ' economy-shrimp-meal.jpg', prices: { hs: null, keeta: 29.5, toyou: 28.5, mandoob: 24 } },
  { id: 'economy-shrimp-meal-spicy', name: 'وجبة الجمبري الاقتصادية حراق', category: 'مأكولات بحرية', image: ' economy-shrimp-meal.jpg', prices: { hs: null, keeta: 29.5, toyou: null, mandoob: null } },
  { id: 'jumbo-shrimp-10pc', name: 'وجبة الجمبري الجامبو 10 قطع', category: 'مأكولات بحرية', image: ' jumbo-shrimp-10pc.jpg', prices: { hs: null, keeta: 38.5, toyou: 37.5, mandoob: 32 } },
  { id: 'jumbo-shrimp-12pc', name: 'وجبة الجمبري الجامبو 12 قطعة', category: 'مأكولات بحرية', image: ' jumbo-shrimp-12pc.jpg', prices: { hs: null, keeta: 51.5, toyou: 50.5, mandoob: 43.5 } },

  // ===== فلافل =====
  { id: 'falafel-sandwich', name: 'ساندوتش فلافل', category: 'خضار', image: null, prices: { hs: 7.5, keeta: 7.5, toyou: null, mandoob: null } },
  { id: 'falafel-sandwich-spicy', name: 'ساندوتش فلافل حراق', category: 'خضار', image: null, prices: { hs: 7.5, keeta: 7.5, toyou: null, mandoob: null } },
  { id: 'falafel-snack', name: 'سناك فلافل البيك', category: 'خضار', image: null, prices: { hs: 4, keeta: 4, toyou: null, mandoob: null } },
  { id: 'falafel-snack-spicy', name: 'سناك فلافل البيك حراق', category: 'خضار', image: null, prices: { hs: 4, keeta: 4, toyou: null, mandoob: null } },

  // ===== الجانبيات =====
  { id: 'fries', name: 'بطاطس', category: 'طلبات جانبية', image: ' fries.jpg', prices: { hs: 7, keeta: 7, toyou: 6.5, mandoob: 4 } },
  { id: 'fries-garlic-sauce', name: 'بطاطس مع صلصة الثوم', category: 'طلبات جانبية', image: ' fries-garlic-sauce.jpg', prices: { hs: null, keeta: null, toyou: 7.5, mandoob: 5 } },
  { id: 'crunchy-fries', name: 'كرنشي فرايز', category: 'طلبات جانبية', image: null, prices: { hs: 8, keeta: 8, toyou: null, mandoob: null } },
  { id: 'baik-chips', name: 'شيبس البيك', category: 'طلبات جانبية', image: ' baik-chips.jpg', prices: { hs: 7, keeta: 7, toyou: 6.5, mandoob: 4 } },
  { id: 'corn-cob', name: 'ذرة', category: 'طلبات جانبية', image: ' corn-cob.jpg', prices: { hs: 8, keeta: 8, toyou: 7.5, mandoob: 6 } },
  { id: 'corn-cup', name: 'كوب الذرة', category: 'طلبات جانبية', image: ' corn-cup.jpg', prices: { hs: 8, keeta: 8, toyou: 7.5, mandoob: 6 } },
  { id: 'hummus', name: 'حمّص', category: 'طلبات جانبية', image: ' hummus.jpg', prices: { hs: 7, keeta: 7, toyou: 6.5, mandoob: 5 } },
  { id: 'coleslaw', name: 'سلطة ملفوف', category: 'طلبات جانبية', image: ' coleslaw.jpg', prices: { hs: 7, keeta: 7, toyou: 6.5, mandoob: 5 } },
  { id: 'chicken-snack-5pc', name: 'سناك دجاج مسحب 5 قطع', category: 'طلبات جانبية', image: ' chicken-snack-5pc.jpg', prices: { hs: 7, keeta: 6.5, toyou: 6.5, mandoob: 5 } },
  { id: 'bread', name: 'خبز (قطعتين)', category: 'طلبات جانبية', image: ' bread.jpg', prices: { hs: 2, keeta: 2, toyou: 2, mandoob: 1.25 } },

  // ===== الصوصات =====
  { id: 'garlic-sauce', name: 'صلصة الثوم', category: 'صوصات', image: ' garlic-sauce.jpg', prices: { hs: 2, keeta: 2, toyou: 1.5, mandoob: 1 } },
  { id: 'cocktail-sauce', name: 'صلصة الكوكتيل', category: 'صوصات', image: ' cocktail-sauce.jpg', prices: { hs: 2.5, keeta: 2.5, toyou: 2, mandoob: 1.75 } },
  { id: 'nuggets-sauce', name: 'صلصة المسحب', category: 'صوصات', image: ' nuggets-sauce.jpg', prices: { hs: 2, keeta: 2, toyou: 1.5, mandoob: 1.25 } },
  { id: 'tahini-sauce', name: 'صلصة الطحينة', category: 'صوصات', image: null, prices: { hs: 2.5, keeta: 2.5, toyou: null, mandoob: null } },
  { id: 'tartar-sauce', name: 'صلصة الطرطار', category: 'صوصات', image: null, prices: { hs: 2.5, keeta: 2.5, toyou: null, mandoob: null } },
  { id: 'halibo-sauce', name: 'صلصة الهاليبو', category: 'صوصات', image: null, prices: { hs: 2.5, keeta: 2.5, toyou: null, mandoob: null } },

  // ===== الفطور (كيتا فقط — أوقات محددة) =====
  { id: 'egg-sandwich', name: 'ساندويتش بيض سادة', category: 'فطور', image: null, prices: { hs: null, keeta: 6.5, toyou: null, mandoob: null } },
  { id: 'egg-cheese-sandwich', name: 'ساندويتش بيض وشريحتين جبنة', category: 'فطور', image: null, prices: { hs: null, keeta: 7.5, toyou: null, mandoob: null } },

  // ===== الحلويات والآيس كريم =====
  { id: 'maamoul', name: 'معمول البيك (قطعتين)', category: 'حلويات', image: ' maamoul.jpg', prices: { hs: null, keeta: null, toyou: 1.5, mandoob: 0.5 } },
  { id: 'ice-cream-strawberry', name: 'أيس كريم بنكهة الفراولة', category: 'حلويات', image: ' ice-cream-strawberry.jpg', prices: { hs: null, keeta: null, toyou: null, mandoob: 2.5 } },
  { id: 'ice-cream-chocolate', name: 'أيس كريم بنكهة الشوكولاته', category: 'حلويات', image: ' ice-cream-chocolate.jpg', prices: { hs: null, keeta: null, toyou: null, mandoob: 2.5 } },

  // ===== المشروبات =====
  { id: 'pepsi', name: 'بيبسي 360مل', category: 'مشروبات', image: ' pepsi.jpg', prices: { hs: 4.5, keeta: 4.5, toyou: 4, mandoob: 3.5 } },
  { id: 'pepsi-diet', name: 'بيبسي دايت', category: 'مشروبات', image: ' pepsi-diet.jpg', prices: { hs: 4.5, keeta: 4.5, toyou: 4, mandoob: 3.5 } },
  { id: '7up', name: 'سفن أب', category: 'مشروبات', image: ' 7up.jpg', prices: { hs: 4.5, keeta: 4.5, toyou: 4, mandoob: 3.5 } },
  { id: '7up-diet', name: 'سفن أب دايت', category: 'مشروبات', image: null, prices: { hs: 4.5, keeta: null, toyou: null, mandoob: null } },
  { id: 'mirinda-orange', name: 'ميرندا برتقال', category: 'مشروبات', image: ' mirinda-orange.jpg', prices: { hs: 4.5, keeta: 4, toyou: 4, mandoob: 3.5 } },
  { id: 'mirinda-citrus', name: 'ميرندا حمضيات', category: 'مشروبات', image: ' mirinda-citrus.jpg', prices: { hs: 4.5, keeta: 4, toyou: 4, mandoob: 3.5 } },
  { id: 'lipton-lemon', name: 'ليبتون آيس تي ليمون', category: 'مشروبات', image: ' lipton-lemon.jpg', prices: { hs: 5.5, keeta: 5, toyou: 5, mandoob: 4 } },
  { id: 'lipton-apricot', name: 'ليبتون آيس تي مشمش', category: 'مشروبات', image: null, prices: { hs: 5.5, keeta: 5, toyou: null, mandoob: null } },
  { id: 'lipton-peach', name: 'ليبتون آيس تي خوخ', category: 'مشروبات', image: ' lipton-peach.jpg', prices: { hs: null, keeta: 5, toyou: null, mandoob: 4 } },
  // ملاحظة: كيتا تعرض العصائر بشكل عام (صغير 3 / كبير 4.5) بدون تحديد النكهة،
  // لذلك تُركت keeta: null في العصائر المحددة أدناه
  { id: 'orange-juice', name: 'عصير برتقال صغير (المراعي)', category: 'مشروبات', image: ' orange-juice.jpg', prices: { hs: 3.5, keeta: null, toyou: null, mandoob: 3 } },
  { id: 'apple-juice', name: 'عصير تفاح صغير (المراعي)', category: 'مشروبات', image: ' apple-juice.jpg', prices: { hs: 3.5, keeta: null, toyou: 3, mandoob: 3 } },
  { id: 'mango-grape-juice', name: 'عصير مانجا وعنب صغير (المراعي)', category: 'مشروبات', image: ' mango-grape-juice.jpg', prices: { hs: 3.5, keeta: null, toyou: 3, mandoob: 3 } },
  { id: 'mixed-fruit-juice', name: 'عصير فواكه مشكلة صغير', category: 'مشروبات', image: null, prices: { hs: 3.5, keeta: null, toyou: 3, mandoob: null } },
  { id: 'almarai-juice-small', name: 'عصير صغير (المراعي)', category: 'مشروبات', image: null, prices: { hs: null, keeta: 3, toyou: null, mandoob: null } },
  { id: 'almarai-juice-large', name: 'عصير كبير (المراعي)', category: 'مشروبات', image: null, prices: { hs: null, keeta: 4.5, toyou: null, mandoob: null } },
  { id: 'water', name: 'ماء 600مل', category: 'مشروبات', image: ' water.jpg', prices: { hs: 2, keeta: 2, toyou: 2, mandoob: 1 } }, // هنقرستيشن: بيرين / الباقي: نستله
];

// ------------------------------------------------------------
// دوال مساعدة للمقارنة
// ------------------------------------------------------------

// السعر الإجمالي لصنف واحد شامل التوصيل على منصة معينة
export function totalPrice(item, platformId) {
  const p = item.prices[platformId];
  if (p == null) return null;
  return p + PLATFORMS[platformId].deliveryFee;
}

// أفضل منصة لسلة كاملة (مصفوفة من { itemId, qty })
export function bestPlatformForBasket(basket) {
  const results = {};
  for (const pid of Object.keys(PLATFORMS)) {
    let sum = 0, available = true;
    for (const { itemId, qty } of basket) {
      const item = ALBAIK_ITEMS.find(i => i.id === itemId);
      const price = item?.prices[pid];
      if (price == null) { available = false; break; }
      sum += price * (qty || 1);
    }
    results[pid] = available ? sum + PLATFORMS[pid].deliveryFee : null;
  }
  return results;
}

// ------------------------------------------------------------
// خلاصة استراتيجية لأوفر (محدّثة بعد إضافة مستر مندوب):
//
// 1. الطلبات الصغيرة (وجبة واحدة): كيتا أو تويو الأوفر
//    مثال — وجبة 4 قطع: كيتا 22+9=31 | تويو 22+9=31 | مندوب 18+23=41
//
// 2. الطلبات العائلية الكبيرة: مستر مندوب ينقلب للأوفر
//    لأن أسعاره أسعار المحل (~20-30% أقل) ورسومه ثابتة 23 ريال.
//    نقطة التعادل تقريباً: سلة بقيمة 55-70 ريال بسعر المحل.
//    مثال — وجبتين 8 قطع: كيتا (42×2)+9=93 | مندوب (35×2)+23=93 (تعادل)
//    وأي إضافة بعدها تجعل مندوب الأرخص.
//
// 3. السرعة: كيتا بلا منازع (17 دقيقة مقابل 35-53 للبقية)
//
// هذه بالضبط القيمة اللي يقدمها أوفر: "حاسبة أفضل منصة حسب سلتك"
// ------------------------------------------------------------

export default { PLATFORMS, ALBAIK_ITEMS, totalPrice, bestPlatformForBasket };
