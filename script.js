const init = () => {
    Cookies.get('city') ? oldUser() : firstTimeUser();
    Cookies.get('checkb1') ? oldUserCheck() : firstTimeUserCheck();
    $(".btn:first").click(function() {
    let val = $("#city-input")[0]["value"];
    Cookies.set("city", val, {expires: 7});
  });
}

const oldUser = () => {
    let userCity = Cookies.get('city');
    $("[name='city']").toggle();
    $(".data-city").toggle();
    $("p").html("Ваш город — " + userCity);
    console.log(`This is the user from ${userCity}.`);
    $("a").click(function(){
        Cookies.remove('city');
    })
}

const firstTimeUser = () => {
    console.log("This is a first-timer");
}

function oldUserCheck() {
    for (let i = 0; i < 6; i++) {
        $("[type='checkbox']")[i]['checked'] = JSON.parse(Cookies.get(`checkb${i}`));
        $("[type='checkbox']")[i]["disabled"] = true;
        $(".btn:last").hide();
    }
}

function firstTimeUserCheck() {
    $(".btn:last").click(function() {
        for (let i = 0; i < 6; i++) {
            Cookies.set(`checkb${i}`, $("[type='checkbox']")[i]['checked'], {expires: 7});
            $("[type='checkbox']")[i]["disabled"] = true;
        };
        $(".btn:last").hide();
    });
}

$(document).ready(init);