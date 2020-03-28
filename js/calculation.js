/*楼板l*/
function gamaudescribe_l() {
    gamaudescribe("gamau_l", "gamaudesc_l");
}
function calculation_l() {
    var l = getvalue("length_l")/1000;  //板长,单位m
    var l0 = l - 0.1;       //试验板两支点间距离，单位m；
    var Rho = getvalue("density_l");    //密度，单位N/m3
    var b = getvalue("width_l")/1000;      //板宽，单位m
    var d = getvalue("depth_l")/1000;      //板厚，单位m
    var W = getvalue("W_l");      //加载用加压板、滚筒和横梁的总重量，单位为牛顿（N）
    var Qz = getvalue("Qz_l");      //板的承载力允许值，单位N/m2
    var gamau = getvalue("gamau_l");       //破坏检验标志，承载力检验系数允许值，一般情况取1.20
    var gama0 = getvalue("gama0_l");      //重要性系数
    var gamaR = 0.75;       //抗力分项系数，取0.75
    var G = Rho * l * b * d;    //板自重，单位牛顿N
    var Fcr = getvalue("Fcr_l");        //初裂时集中力荷载实测值，单位N
    var Fu = getvalue("Fu_l");         //破坏时集中力荷载实测值，单位N
    var Qg = Rho * d;       //板的单位面积自重，单位N/m2
    var Qcr = Math.floor((W + Fcr) / (l0 * b * 10)) * 10;      //初裂荷载实测值，单位N/m2
    var Qu = Math.floor((W + Fu) / (l0 * b * 10)) * 10;        //破坏荷载实测值，单位N/m2
    var Qd = Math.floor((1.3 * Qg + Qz) / 10) * 10;        //荷载设计值，单位N/m2
    var Qd_f = gama0 * gamau * Qd / gamaR;        //破坏荷载比较值
    var alphacrm = getvalue("alphacrm_l");       //板初裂时中部位移记录仪记录的挠度实测值，单位为毫米（mm）
    var alphacrr = getvalue("alphacrr_l");       //板初裂时两端位移记录仪记录的挠度实测值的平均值，单位为毫米（mm）
    var alphas = alphacrm - alphacrr;     //板短期挠度实测值，单位mm
    var Qk = Qz / 1.5 + Qg;      //楼板、屋面板荷载标准值,N/m2
    var alpha = ((Qk - Qg) / Qk * 11 / 10 * l0 / 400 * 1000).toFixed(1);
    calinitialload(Qcr, Qd, "initialloadtest_l");
    calfinalload(Qu, Qd_f, "finalloadtest_l");
    caldeflection(alphas, alpha, "deflectiontest_l");
}

/*屋面板*/
function gamaudescribe_w() {
    gamaudescribe("gamau_w", "gamaudesc_w");
}

function calculation_w() {
    var l = getvalue("length_w")/1000;  //板长,单位m
    var l0 = l - 0.1;       //试验板两支点间距离，单位m；
    var Rho = getvalue("density_w");    //密度，单位N/m3
    var b = getvalue("width_w")/1000;      //板宽，单位m
    var d = getvalue("depth_w")/1000;      //板厚，单位m
    var W = getvalue("W_w");      //加载用加压板、滚筒和横梁的总重量，单位为牛顿（N）
    var Qz = getvalue("Qz_w");      //板的承载力允许值，单位N/m2
    var gamau = getvalue("gamau_w");       //破坏检验标志，承载力检验系数允许值，一般情况取1.20
    var gama0 = getvalue("gama0_w");      //重要性系数
    var gamaR = 0.75;       //抗力分项系数，取0.75
    var G = Rho * l * b * d;    //板自重，单位牛顿N
    var Fcr = getvalue("Fcr_w");        //初裂时集中力荷载实测值，单位N
    var Fu = getvalue("Fu_w");         //破坏时集中力荷载实测值，单位N
    var Qg = Rho * d;       //板的单位面积自重，单位N/m2
    var Qcr = Math.floor((W + Fcr) / (l0 * b * 10)) * 10;      //初裂荷载实测值，单位N/m2
    var Qu = Math.floor((W + Fu) / (l0 * b * 10)) * 10;        //破坏荷载实测值，单位N/m2
    var Qd = Math.floor((1.3 * Qg + Qz) / 10) * 10;        //荷载设计值，单位N/m2
    var Qd_f = gama0 * gamau * Qd / gamaR;        //破坏荷载比较值
    var alphacrm = getvalue("alphacrm_w");       //板初裂时中部位移记录仪记录的挠度实测值，单位为毫米（mm）
    var alphacrr = getvalue("alphacrr_w");       //板初裂时两端位移记录仪记录的挠度实测值的平均值，单位为毫米（mm）
    var alphas = alphacrm - alphacrr;     //板短期挠度实测值，单位mm
    var Qk = Qz / 1.5 + Qg;      //楼板、屋面板荷载标准值,N/m2
    var alpha = ((Qk - Qg) / Qk * 11 / 10 * l0 / 400 * 1000).toFixed(1);
    calinitialload(Qcr, Qd, "initialloadtest_w");
    calfinalload(Qu, Qd_f, "finalloadtest_w");
    caldeflection(alphas, alpha, "deflectiontest_w");
}

/*外墙板q*/
function gamaudescribe_q() {
    gamaudescribe("gamau_q", "gamaudesc_q");
}

function calculation_q() {
    var l = getvalue("length_q")/1000;  //板长,单位m
    var l0 = l - 0.1;       //试验板两支点间距离，单位m；
    var Rho = getvalue("density_q");    //密度，单位N/m3
    var b = getvalue("width_q")/1000;      //板宽，单位m
    var d = getvalue("depth_q")/1000;      //板厚，单位m
    var W = getvalue("W_q");      //加载用加压板、滚筒和横梁的总重量，单位为牛顿（N）
    var Qz = getvalue("Qz_q");      //板的承载力允许值，单位N/m2
    var gamau = getvalue("gamau_q");       //破坏检验标志，承载力检验系数允许值，一般情况取1.20
    var gama0 = getvalue("gama0_q");      //重要性系数
    var gamaR = 0.75;       //抗力分项系数，取0.75
    var G = Rho * l * b * d;    //板自重，单位牛顿N
    var Fcr = getvalue("Fcr_q");        //初裂时集中力荷载实测值，单位N
    var Fu = getvalue("Fu_q");         //破坏时集中力荷载实测值，单位N
    var Qg = Rho * d;       //板的单位面积自重，单位N/m2
    var Qcr = Math.floor(((W + Fcr) / (l0 * b) + G / (l * b)) / 10) * 10;      //初裂荷载实测值，单位N/m2
    var Qu = Math.floor(((W + Fu) / (l0 * b) + G / (l * b)) / 10) * 10;        //破坏荷载实测值，单位N/m2
    var Qd = Math.floor(Qg / 10) * 10;        //荷载设计值，单位N/m2
    var Qd_f = gama0 * gamau * Qd / gamaR;        //破坏荷载比较值
    var alphacrm = getvalue("alphacrm_q");       //板初裂时中部位移记录仪记录的挠度实测值，单位为毫米（mm）
    var alphacrr = getvalue("alphacrr_q");       //板初裂时两端位移记录仪记录的挠度实测值的平均值，单位为毫米（mm）
    var alphas = alphacrm - alphacrr;     //板短期挠度实测值，单位mm
    var Qk = Qz / 1.5;      //外墙板荷载标准值,N/m2
    var alpha = ((Qk - Qg) / Qk * 11 / 10 * l0 / 200 * 1000).toFixed(1);
    calinitialload(Qcr, Qd, "initialloadtest_q");
    calfinalload(Qu, Qd_f, "finalloadtest_q");
    caldeflection(alphas, alpha, "deflectiontest_q");
}

/*隔墙板*/
function calculation_g() {
    var l = getvalue("length_g")/1000;  //板长,单位m
    var l0 = l - 0.1;       //试验板两支点间距离，单位m；
    var Rho = getvalue("density_g");    //密度，单位N/m3
    var b = getvalue("width_g")/1000;      //板宽，单位m
    var d = getvalue("depth_g")/1000;      //板厚，单位m
    var W = getvalue("W_g");      //加载用加压板、滚筒和横梁的总重量，单位为牛顿（N）
    var gamag = 0.3;        //隔墙板承载力检验系数，取0.3
    var Fcr = getvalue("Fcr_g");        //初裂时集中力荷载实测值，单位N
    var Qg = gamag * W / (l * b);       //板的单位面积自重，单位N/m2
    var Qcr = Math.floor((Fcr) / (b * l0 * 10)) * 10;      //初裂荷载实测值，单位N/m2
    calinitialload(Qcr, Qg, "initialloadtest_g");
}
