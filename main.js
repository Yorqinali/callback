

let demo = document.getElementById("demo")
let demo1 = document.getElementById("demo1")
let demo2 = document.getElementById("demo2")
let demo3 = document.getElementById("demo3")
let demo4 = document.getElementById("demo4")
let demo5 = document.getElementById("demo5")
let demo6 = document.getElementById("demo6")
let demo7 = document.getElementById("demo7")
let demo8 = document.getElementById("demo8")
let demo9 = document.getElementById("demo9")
let demo10 = document.getElementById("demo10")
let demo11 = document.getElementById("demo11")
let demo12 = document.getElementById("demo12")


let order = (production) => {
  console.log('order placed');
  setTimeout(production, 2000)
}

let production = () => {
  setTimeout(() => {
   demo.textContent = '1.production started';
    setTimeout(() => {
      demo1.textContent = '2.gosht tanlandi';
      setTimeout(() => {
        demo2.textContent = '3.gosht maydalandi';
        setTimeout(() => {
          demo3.textContent = '4.yog qoshildi';
          setTimeout(() => {
            demo4.textContent = '5.piyoz qoshildi';
            setTimeout(() => {
              demo5.textContent = '6.tuz va ziravorlar qoshildi';
              setTimeout(() => {
                demo6.textContent = '7.non qoshildi';
                setTimeout(() => {
                  demo7.textContent = '8.barcha maxsulotlar aralashtirildi';
                  setTimeout(() => {
                    demo8.textContent = '9.barcha maxsulotlar gosht maydalagichdan chiqarildi';
                    setTimeout(() => {
                      demo9.textContent = '10.yarim tayyor maxsulot yaxshilab pishitildi';
                      setTimeout(() => {
                        demo10.textContent = '11.zixga tortildi';
                        setTimeout(() => {
                          demo11.textContent = '12.pishirishga qoyildi';
                          setTimeout(() => {
                            demo12.textContent = '13.mijozga yetkazildi';
                          }, 1000);
                        }, 3000);
                      }, 1000);
                    }, 1000);
                  }, 2000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1500);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

order(production)