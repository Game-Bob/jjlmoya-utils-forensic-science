import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "adli-bilimler",
  title: "Adli Bilim Araçları",
  description: "Yapılandırılmış vaka triyajı, şeffaf hesaplamalar ve delil bilincine sahip raporlama için adli araçlar.",
  seo: [
    {
      type: 'title',
      text: "Kanıt Analizi ve Vaka Triyajı için Adli Bilim Araçları",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Bu kütüphane; adli analistler, hukuk uzmanları, araştırmacılar ve soruşturmacılar için uzmanlaşmış araçlar ve hesaplama yöntemleri sunar. Adli bilim yardımcı programları, olay yerlerinden toplanan fiziksel kanıtların değerlendirilmesine yardımcı olur. Kan lekesi yörüngesi, yaş tahmini, cam kırılma indisi ve uyuşturucu analizi için yapılandırılmış modeller kullanılarak ekipler ilk vaka triyajını gerçekleştirebilir. Her bir araç şeffaflığa odaklanır; varsayımları gösterir ve kullanıcıların her adli formülün sınırlarını net bir şekilde anlamalarına yardımcı olur.",
    },
    {
      type: 'paragraph',
      html: "Erken vaka incelemesi, hangi kanıtların mevcut olduğunu, bilimsel formüllerin neyi varsaydığını ve belirsizliğin nerede devam ettiğini değerlendirmeyi gerektirir. Bu hesaplayıcılar, eğitimi ve ön değerlendirmeyi desteklemek üzere tasarlanmıştır. Resmi laboratuvar testlerine başlamadan önce hangi analitik adımların gerekli olduğunu belirlemeye yardımcı olurlar. Bu araçların kullanılması, soruşturma sürecinin erken safhalarında kanıt dosyalarındaki eksikliklerin tespit edilmesini kolaylaştırır.",
    },
    {
      type: 'title',
      text: "Adli Hesaplamaların Temel Alanları",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Yaş tahmini:</strong> açık belirsizlik metrikleri ile iskelet, diş ve olgunluk hesaplamaları.',
        '<strong>Kanıt yorumlama:</strong> formülleri, güven aralıklarını ve sınırları gösteren yapılandırılmış tahmin araçları.',
        '<strong>Vaka triyajı:</strong> eksik kanıtları vurgulayan ve resmi inceleme için gereken parametreleri belirleyen hızlı araçlar.',
        '<strong>Rapor hazırlama desteği:</strong> sahte hassasiyet yerine aralık değerleri kullanarak net raporlamayı teşvik eden yardımcı programlar.',
      ],
    },
    {
      type: 'title',
      text: "Adli Yazılımların Sorumlu Kullanımı için Kılavuz İlkeler",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Her adli hesaplama hata oranları ve güven sınırları içerir. Bir hesaplayıcı asla yetkin bir uzman tanığın veya doğrulanmış bir laboratuvar protokolünün yerini almamalıdır. Bunun yerine, bu web araçları senaryoları keşfetmek, uzman olmayan kişilere kavramları açıklamak ve nihai raporları yazmadan önce ölçüm duyarlılığını kontrol etmek için en iyi şekilde kullanılır. Bu, mahkemede bilimsel hassasiyetle ilgili yanlış anlaşılmaları önlemeye yardımcı olur.",
    },
    {
      type: 'table',
      headers: ['Uygun Kullanım', 'Uygun Olmayan Kullanım', 'Önem'],
      rows: [
        ["Resmi uzman incelemesinden önce vaka dosyalarını taramak.", "Hesaplayıcı çıktısını nihai uzman görüşü olarak kullanmak.", "Adli kanıtlar bilimsel doğrulamanın katı standartlarını karşılamalıdır."],
        ["Ölçüm belirsizliğini ve aralıklarını soruşturmacılara açıklamak.", "Sınırları açıklamadan tek bir kesin sayı rapor etmek.", "Yapay hassasiyet, yargı sistemlerinde yanlış kararlara yol açabilir."],
        ["Girdi varsayımlarının tahmini sonucu nasıl etkilediğini kontrol etmek.", "İlk parametreleri veya hesaplamaları vaka kaydından gizlemek.", "Şeffaflık, sonuçların denetlenmesine ve başkaları tarafından tekrarlanmasına olanak tanır."],
        ["Veri kalitesinin hesaplama için yeterli olup olmadığını belirlemek.", "Zayıf veya eksik ölçek ölçümleriyle formülleri çalıştırmak.", "Zayıf girdi parametreleri, her türlü matematiksel rekonstrüksiyonu güvenilmez kılar."],
      ],
    },
  ],
};
