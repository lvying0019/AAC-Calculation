/*通用方法*/
var item = document.getElementById('type').children;
var itemId = document.getElementById('type_id').children;
for (var i = 0; i < item.length; i++) {
    item[i].index = i;
    item[i].onclick = function () {
        for (var j = 0; j < itemId.length; j++) {
            itemId[j].className = 'collapse';
        }
        itemId[this.index].className = 'collapsing';
    }
}


/*获取数据值*/
function getvalue(name) {
    var names = document.getElementsByName(name);
    for (var i = 0; i < names.length; i++) {
        if (i == names.length - 1) {
            return names[i].value;
        } else if (names[i].checked == true) {
            return names[i].value;
        }
    }
}

/*单选和输入框的转变*/
function transform(name) {
    var names = document.getElementsByName(name);
    for (var i = 0; i < names.length; i++) {
        if (i==names.length-1){
            names[i].setAttribute("placeholder","请输入");
        }
        names[i].checked = false;
    }
}

/*用于gamau描述*/
function gamaudescribe(name, id) {
    var value = getvalue(name);
    desc = document.getElementById(id);
    switch (value) {
        case "1.20":
            desc.innerHTML = "在受拉主筋的最大裂缝宽度达到1.5mm，或挠度达到跨度的1/50";
            break;
        case "1.30":
            desc.innerHTML = "受压处加气混凝土破坏";
            break;
        case "1.60":
            desc.innerHTML = "受拉主筋拉断";
            break;
        case "1.40":
            desc.innerHTML = "腹部斜裂缝达到1.5mm，或斜裂缝末端受压区加气混凝土剪压破坏";
            break;
        case "1.45":
            desc.innerHTML = "沿斜截面加气混凝土斜压破坏，或受拉主筋在端部滑脱，或其他锚固破坏";
            break;
    }
}

/*判定初裂荷载*/
function calinitialload(Qcr, Qd, initialid) {
    if (Qcr >= Qd) {
        document.getElementById(initialid).innerHTML = "合格";
        document.getElementById(initialid).style.color = "green";
    } else {
        document.getElementById(initialid).innerHTML = "不合格";
        document.getElementById(initialid).style.color = "red";
    }
}

/*判定破坏荷载*/
function calfinalload(Qu, Qd_f, finalid) {
    if (Qu >= Qd_f) {
        document.getElementById(finalid).innerHTML = "合格";
        document.getElementById(finalid).style.color = "green";
    } else {
        document.getElementById(finalid).innerHTML = "不合格";
        document.getElementById(finalid).style.color = "red";
    }
}

/*判断挠度*/
function caldeflection(alphas, alpha, deflectionid) {
    if (alphas <= alpha) {
        document.getElementById(deflectionid).innerHTML = "合格";
        document.getElementById(deflectionid).style.color = "green";
    } else {
        document.getElementById(deflectionid).innerHTML = "不合格";
        document.getElementById(deflectionid).style.color = "red";
    }
}

/*生成pdf文档*/

