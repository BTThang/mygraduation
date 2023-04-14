
var to = 'My Friend!';
var gift_url = 'https://lh3.googleusercontent.com/pw/AJFCJaUFI_Idyf7krWvDTWukqp3uPywsszC7HoKnxp1wHkM_yG5n8VRIw6s8pTkxxkXszEQZ8ZoqXVPYXMk2d3xcszES80iMSYrhxpurMlXX68KeOMpgYpCmrTB2fd05jfKIJP8jdEU8TZ3NJtxluv2GfIwZrcKKYafWANFnCyVax4Wyqwtb0zzOFXbVj9U8HvQg0Y0t6x-H2ugRWomZlXIS7dT83lYw0l16UFyXx-d_3g0SAvBw_puCOklQ3GIOQ3ZSl3XttKathOdjMRSVL2Q9Vs9_x0KMFzEXlwrYR1Pp4Mh2fqfyQjINo5cd7Wafit7SZlhpqY3BE-V_Gl3MmJmyJ5ZkGEigGaWSzvPlpVyl5_zfq8yyIlB4jmNHf1b1qIiM49UkqsokzqtBFPW8mRjqcV_WDHQ4Os-bm_m7Yv39MQ4T3Wsnb4cNf6I4lP3ztZKrT3o99LOxOeQbvquF16uJgxQ0EWSHslGuZkHaAZjRrU74jN0MSSVGSGyhfSvLvZR2ibmHKNNe5yjisNBAu7KUoGmxC6Aa_HK5SwKHvWSzMHFC0M8JB02tUGTh8nwNjVt2fbBgbqqlvdyNemZgoDgrdOiLboiq0OFKcVA1boA70HFHn-fcMM2Wx8ur4_u5gtBwL255I7kCkmlbS6NrIjFaOXYPa30vOpc9JPxe6Okk3yrsvl0I4UNuiXuO4Vl55DhD2Ajfg4f54LGiRV1R02uytH-Iq7gSvP-hkn-QLBKxh3xCLmN1RZIqGm8TAHsxanX2HjsW_-NBgkYsFUD4IhnKCRJ35YVnnph0l4i0H4n5RxIPCGEsLsnpSrQoxp26LJsbRJiy1Lc7QtJ4gHxwFj9wTHeA0BlTA0AFkG2wMxQFDIMG4dqZpMnSXcUIjnAZ3GHQLMP0TabgPqnoG3r_Lliy3w=w893-h893-s-no?authuser=0';
var gift_image_url = 'totnghiep.png';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {

    var _giftLink,
        _giftImg;

    if (gift_url) {
        _giftLink = document.createElement("a");
        _giftLink.href = gift_url;
        _giftLink.target = "_blank";
        presentImage.appendChild(_giftLink);
    }

    if (gift_image_url) {
        _giftImg = document.createElement("img");
        _giftImg.src = gift_image_url;
        if (_giftLink) {
            _giftLink.appendChild(_giftImg);
        } else {
            presentImage.appendChild(_giftImg);
        }
    }

    present.addEventListener("click", function (e) {
        present.classList.toggle("open");
        document.getElementById('card').classList.add('card-show');
        document.getElementById('playAudio').play();
    }, false);



    nametag.innerText = to;
}

init();

