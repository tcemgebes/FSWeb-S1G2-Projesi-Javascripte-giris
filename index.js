/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/


// nasil fonksiyon olusturmadan bunu kullanabilirim hic emin degilim; bir kerelik bir islem olarak yaptim herhalde...
var surucuYasi = 18;

if (surucuYasi > 18) {
  console.log(true);
}

else {
  console.log(false);
}



/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/

let val1 = 17;
let val2 = 13;


if (val1 >= val2) {
  val1 = 18;
}

console.log(val1);

/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
let year = "1999";

year = Number(year);
console.log(year, typeof(year));

/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/

function carpma(a,b) {
  return a*b
}
console.log(carpma(7,4));

/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(yas) {
  return (Number(yas)*7)
}

/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/

function oyun(oyuncu, bilgisayar) {
  if (oyuncu == bilgisayar){
    return "Beraberlik";
  }

  if ((oyuncu == "Taş" && bilgisayar == "Makas") || (oyuncu == "Makas" && bilgisayar == "Kağıt") || (oyuncu == "Kağıt" && bilgisayar == "Taş")) {
    return "Kazandın!"
  }

  else {
    return "Kaybettin!"
  }
  
};


// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yap:
1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/


function bilgisayarinSecimi() {

  let secimMetodu = Math.round(((3*Math.random()) + 0.5));
  
  // 0.333 den az ise Tas, 0.333 ve 0.666 arasi ise Makas... ile ugrasmamak adina Math.random'i 3 ile carptim ki tam sayilara yuvarlanabilsin 
  // Bu ayni zamanda arrayden index halinde secim yapmamiza yarayacak. 
  // Olasiliklari esitlemek icin 0.5 ile topladim. Cunku eger sadece 3 ile carpmis olsaydim, ve sonra yuvarlasaydim:
  // 0'a yuvarlanmasi 0.49'a kadar cikan degerler icin mumkun, fakat 1'e yuvarlanmasi icin 0.5 -- 1.49 arasi herhangi bir deger cikmasi yeterli.
  // Yani 0 cikmasi, 1 cikmasina gore nerdeyse 2 kat daha az olasi olurdu.
  // 0.5 ile toplamak ise su ise yaradi: 0.5 -- 1.49 degerleri 1'e yuvarlaniyor,ve Array'imizde Tas'in indexini ona gore ayarliyoruz
  // 1.5 -- 2.49 degerleri 2'ye yuvarlaniyor, ve Array'deki indexini ona gore ayarliyoruz. Tas ve Makas cikma olasiligi esit bir sekilde.
  // 2.5 -- 3.5 degerleri ise 3 veya 4'e yuvarlaniyor. Bu yuzden Arrayde hem 3. hem 4. elementi Kagit olarak tekrar ettim. 
  // Evet, Kagit cikma olasiligi %1 gibi bir degerle daha fazla. Ama 3 yerine 2.9999 gibi bir degerle carpmanin belki de bilgisayari daha cok yorabilecegini dusundum.
  // Bu yuvarlama isleminin, yani secimMetodu degiskeninin 0 cikarmasi mumkun olamayacagindan 0. indexi undefined biraktim.

  let secimArrayi = [ undefined ,"Taş","Makas","Kağıt","Kağıt"];

  return secimArrayi[secimMetodu];

};


// Birkac tane test yapalim
for (let i = 0; i < 10; i++){
  console.log(oyun(bilgisayarinSecimi(),bilgisayarinSecimi()))
}



/* Görev 4 : Metrik Dönüştürücü */
//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(km) {
  return (km * 0.621371)
};


//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(cm) {
  return (cm / 30.48)
};



/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/

function cocukSarkisi(maymun) {
  return maymun + " küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"
}
for (let i = 5; i > 0; i--) {
  cocukSarkisi(i);
}


/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/


// Bilgisayarin Secimi fonksiyonuna benzer bir yol cizdim 

function notHesapla(not) {
  
  let kacaldim = Math.round((not/10) + 0.5);
  
  
  let bakalim = 
  [undefined,
  "F aldın",
  "F aldın",
  "F aldın",
  "F aldın",
  "F aldın",
  "F aldın",
  "D aldın",
  "C aldın",
  "B aldın",
  "A aldın",
  "A aldın"];

  return bakalim[kacaldim];
};

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

function sesliHarfSayaci(/*buraya kodunu yazabilirsin*/) {
  /*buraya kodunu yazabilirsin*/
}

/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
