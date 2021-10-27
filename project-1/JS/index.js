//object 
const Sectionitem = {
    Men: {
        title: "For Men",
        content: "Men's Products",
        image: "img/man-logo.png",
        items: [{
                name: "Rexona for Men",
                disc: "Men can sweat up to 50% more than women. That's why Rexona created For Men.",
                image: "img/product1m.webp",
                price: 25
            },
            {
                name: "Adidas Dare",
                disc: "Edition 2 Piece Gift Set for Men (Hair & Body Shower Gel 250ml + EDT 50ml)",
                image: "img/product2m.webp",
                price: 105
            },
            {
                name: "Shampoo",
                disc: "With keratin, olive oil and vitamin E but no ammonia for stronger, healthier-looking hair.",
                image: "img/product3m.webp",
                price: "100 SAR"
            },
            {
                name: "Shaver Pack",
                disc: "All devices have stainless steel baldes for greater coverage and a faster shave.",
                image: "img/product4m.webp",
                price: 90
            },
            {
                name: "Restoria Men",
                disc: "Say goodbye to grey hair forever and start looking as young as you feel today!",
                image: "img/product5m.webp",
                price: 95
            },
            {
                name: "Nivea Face Cream 50ml",
                disc: "Skin feels instantly moisturised, without feeling sticky",
                image: "img/product7m.webp",
                price: 15
            },
            {
                name: "Men's Skincare Facial Wash",
                disc: "natural anti-ageing ingredients Hyaluronic Acid and Vitamin E",
                image: "img/product8m.webp",
                price: 35
            },
            {
                name: "Evolis Shampoo for Men 300ml",
                disc: "Delivers instant volume with unique catch and release polymer",
                image: "img/product9m.webp",
                price: 75
            },


        ],

    },
    Women: {
        title: "for Women",
        content: "Women's product ",
        image: "img/women-logo-1.jpg",
        items: [{
                name: "Ego QV Cream 1kg",
                disc: "Particularly suitable for infants and the elderly. QV Cream is free from lanolin.",
                image: "img/product4w.webp",
                price: 115
            },
            {
                name: "Skin Control Pimple Patch AM + PM X 36",
                disc: "Cleanses pimples, Protects from dirt, Helps absorb whiteheads",
                image: "img/product5w.webp",
                price: 135
            },
            {
                name: "Vita gummies",
                disc: "Nature's Way Adult Vita Gummies Women's Multivitamin Pastilles X100",
                image: "img/product2w.webp",
                price: 100
            },
            {
                name: "Nature's Way Kids",
                disc: "Nature's Way Kids Smart Vita Gummies Multi-Vitamin for Fussy Eaters X60",
                image: "img/product3w.webp",
                price: 95
            },
            {
                name: "Nivea",
                disc: "Nivea Anti-Perspirant Deodorant Roll On For Women Sensitive Protect 50ml",
                image: "img/product6m.webp",
                price: 15
            },
            {
                name: "Nivea",
                disc: "Nivea Anti-Perspirant Deodorant Roll On For Women Sensitive Protect 50ml",
                image: "img/product6m.webp",
                price: 15
            },
        ],
    },
    Kids: {
        title: "For Kids",
        content: "Kid's Products",
        image: "img/kids-logo.jpg",
        items: [{
            name: "Johnson Baby",
            disc: "JOHNSON’S Baby Oil 300ml ",
            image: "https://superbekala.com/wp-content/uploads/2020/12/%D8%B2%D9%8A%D8%AA-%D8%AC%D9%88%D9%86%D8%B3%D9%88%D9%86-200%D9%85%D9%84-40%D8%AC.jpg"

        }],
    },
};

//use for in to show the sections in homepage
for (const property in Sectionitem) {
    $(".sections").append(`
    <div class="col-12 col-md-4" >
    <div class="card">
        <img src="${Sectionitem[property]['image']}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5>${Sectionitem[property]['title']}</h5>
            <p class="card-text">${Sectionitem[property]['content']}</p>
            <a href="#" id="${property}" class="btn btn-primary" style="background-color: #14279B;"><i
                    class="bi bi-arrow-right-circle-fill"></i></a>
        </div>
    </div>
</div>`);

    $(` #${property}`).click(function () {
        $(".HomePage").css("display", "none");
        $(".Sectionpage").css("display", "block");
        $(".HomePage").css("display", "none");
        $(".basket").css("display", "none");

        Sectionitem[property]['items'].forEach(elem => {

            $(".Section-item").append(`
            <div class="col-12 col-md-3" id="${elem.name}" >
            <div class="card">
                <img src="${elem.image}" class="card-img" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${elem.name} </h5>
                    <p class="card-text">${elem.disc} </p>
                    <h6>${elem.price} SAR</h6>
                    <a onclick= "addToCart(${elem.price})" id="addd"  href="#"  class="btn btn-primary" style="background-color: #14279B;"><i
                            class="bi bi-cart4"></i></a>
                </div>
            </div>
        </div>`)
        });

    });



};

//local stoarge for object
let myobj = JSON.stringify(Sectionitem);

localStorage.setItem("Sectionitem", myobj);

let myobjdes = JSON.parse(localStorage.getItem("Sectionitem"));




$("#Signin").click(function () {
    $(".HomePage").css("display", "none");
    $(".Sectionpage").css("display", "none");
    $(".sign-in").css("display", "block");
    $(".sign-up").css("display", "none");
    $(".basket").css("display", "none");
});

$("#Create").click(function () {
    $(".HomePage").css("display", "none");
    $(".Sectionpage").css("display", "none");
    $(".sign-in").css("display", "none");
    $(".sign-up").css("display", "block");
    $(".basket").css("display", "none");
});

//sign up

$("#Create-Account").click(function () {

    let newuser = $("#username").val();
    let newPass = $("#Pass").val();
    let newEmail = $("#Email").val();

    if (newuser !== "" && newPass !== "" && newEmail !== "") {

        const users = {
            name: newuser,
            password: newPass,
            email: newEmail,
        };
        const listofUsers = JSON.parse(localStorage.getItem('Data'));

        if (listofUsers !== null) {
            listofUsers.push(users);
            localStorage.setItem('Data', JSON.stringify(listofUsers));

        } else {
            let newcustomer = [];
            newcustomer.push(users);
            localStorage.setItem('Data', JSON.stringify(newcustomer));
        }

        $('.sign-up').css('display', 'none');
        $('.sign-in').css('display', 'block');
    } else {
        $('.sign-up').css('display', 'block');
    }

});

$('#btnSignIn').click(function () {
    // let newuser = $('#user1').val(); 
    // let newPass = $('#passw').val(); 

    // const listofUsers = JSON.parse(localStorage.getItem('Data')); 

    // if (newuser !== "" && newPass !== "") {
    //     listofUsers.forEach(function (user) { 
    //         if (newuser === user.name && newPass === user.password) {
    //             alert(`Hello ${user.name}`);
    //             // $('.sign-in').css('display', 'none'); 
    //             // $('.HomePage').css('display', 'block');
    //             //chicking
    //             // sessionStorage.setItem('UserName', newuser); 
    //             // const userLogin = sessionStorage.getItem('UserName'); 
    //             // if (userLogin !== null) { 
    //             //     // $('.HomePage').css('display', 'block'); 
    //             //     // $('.sign-in').css('display', 'none'); 
    //             // } 
    //         } else { 
    //             alert("WR");
    //             $('.HomePage').css('display', 'none'); 
    //             $('.sign-in').css('display', 'block');
    //         } 
    //     }); 
    // }else{
    //     alert("Enter Data");
    // }

    let inputUser = $('#user1').val();
    let inputPassword = $('#passw').val();

    const usersList = JSON.parse(localStorage.getItem('Data'));

    if (inputUser !== "" && inputPassword !== "") {
        usersList.forEach(function (user) {
            if (inputUser === user.name && inputPassword === user.password) {
                $('.sign-in').css('display', 'none');
                $('.HomePage').css('display', 'block');
            } else {

            }
        });
    } else {
        alert('Fill Data');
    }

});

// cart 
let arr = [];

function addToCart(id) {
    arr.push(id);


    localStorage.setItem('dataCart', JSON.stringify(arr));
    let num = JSON.parse(localStorage.getItem('dataCart'));
    $('#cartt').html(num.length);

};


$("#bass").click(function () {
    $(".HomePage").css("display", "none");
    $(".Sectionpage").css("display", "none");
    $(".sign-in").css("display", "none");
    $(".sign-up").css("display", "none");
    $(".basket").css("display", "bluck");
});

// take the items to cart
const cartUser = JSON.parse(localStorage.getItem('cartUser'));
favoriteUserList.forEach(element => {
    for (const key in element) {
        for (const item in element[key]['Favorites']) {
            $('.row-cols-1').append(
                `<div class="col-12 col-md-3">
                    <div class="card">
                        <img src="${element[key]['Favorites'][item]['image']}" class="card-img-top" alt="..." height:"170px">
                        <div class="card-body">
                            <h5 class="card-title">${element[key]['Favorites'][item]['name']}</h5>
                        </div>
                    </div>
                    </div>`);
        }
    }
});