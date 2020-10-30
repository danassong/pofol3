(function ($) {

    /* header scroll 이벤트 */
    $(window).scroll(function() {
        var sct = $(this).scrollTop()
        if (sct >= 30) {
            $('#header').css({
                background: 'slateblue',
                color: '#fff'
            })
        } else {
            $('#header').css({
                background: '#fff',
                color: 'slateblue'
            })
        }
    })


    /* page 하이퍼링크 */
    $('body').on("click", '#header h1 a, .mainContent a', function() {
        var url = this.href
        $('#container > #content').remove()
        $('#container').load(url + " #content")
        return false
    })


    /* nav 햄버거 버튼 클릭시 박스 열기 */
    $('#lnb_menu').on('click', function() {
        $('#navWrap').css({
            display: 'block',
        })
        $('#lnb').css({
            right: '0'
        })
        $('#lnb_close').css({
            display: 'block'
        })
    })
    $('#lnb_close').on('click', function() {
        $(this).css({
            display: 'none'
        })
        $('#lnb').animate({
            right: '-270px'
        }, 500, function() {
            $('#navWrap').css({
                display: 'none'
            })
        })
    })



    /* themeItem 페이지 json data 불러오기 기본작업 */
    // var themeItemdata1, themeItemdata2, themeItemdata3;
    var themeItemdata
    $.ajax({
        type: 'GET',
        url: 'data/themeItem.json',
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType('application/json')
            }
        },
        success: function(data) {
            // themeItemdata1 = data.themeCar;
            // themeItemdata2 = data.themeKid;
            // themeItemdata3 = data.themeHome;
            themeItemdata = data
        },
        error: function() {
            alert(xhr.status + '오류발생')
        }
    })
    /* themeItem 페이지: json 불러오기 */
    $('#container').on('click', '.cont1tab1 a', function(e) {
        e.preventDefault()
        var url = this.href
        // var themeItem = $(this).attr('class')
        $('#container > #content').remove()
        $('#container').load(url + " #content", function() {
                // var theme = [ themeItemdata1, themeItemdata2, themeItemdata3 ]
                // var newContent = '';
                // for (var j=0; j<theme.length; j++) {
                //     for (var i=0; i<theme[j].length; i++) {
                //         newContent += `<li><span class="loan">${theme[j].tag}</span>`
                //         newContent += `<div class="info"><p>${theme[j].info}</p>`
                //         newContent += `<h6>${theme[j].name}</h6></div>`
                //         newContent += `<p>최고 <span>${theme[j].price}</span> ${theme[j].period}</p></li>`
                //     }
                //     $('#content .theme').eq(j).append(`<ul>${newContent}</ul>`)
                // }
                
                var newContent1 = ''
                for (var i in themeItemdata["themeCar"]) {
                newContent1 += `<li><span class="loan">${themeItemdata["themeCar"][i].tag}</span>`
                newContent1 += `<div class="info"><p>${themeItemdata["themeCar"][i].info}</p>`
                newContent1 += `<h6>${themeItemdata["themeCar"][i].name}</h6></div>`
                newContent1 += `<p>최고 <span>${themeItemdata["themeCar"][i].price}</span> ${themeItemdata["themeCar"][i].period}</p></li>`
                }
                $('#content .theme').eq(0).append(`<ul>${newContent1}</ul>`)

                var newContent2 = ''
                for (var i in themeItemdata["themeKid"]) {
                newContent2 += `<li><span class="loan">${themeItemdata["themeKid"][i].tag}</span>`
                newContent2 += `<div class="info"><p>${themeItemdata["themeKid"][i].info}</p>`
                newContent2 += `<h6>${themeItemdata["themeKid"][i].name}</h6></div>`
                newContent2 += `<p>최고 <span>${themeItemdata["themeKid"][i].price}</span> ${themeItemdata["themeKid"][i].period}</p></li>`
                }
                $('#content .theme').eq(1).append(`<ul>${newContent2}</ul>`)

                var newContent3 = ''
                for (var i in themeItemdata["themeHome"]) {
                newContent3 += `<li><span class="loan">${themeItemdata["themeHome"][i].tag}</span>`
                newContent3 += `<div class="info"><p>${themeItemdata["themeHome"][i].info}</p>`
                newContent3 += `<h6>${themeItemdata["themeHome"][i].name}</h6></div>`
                newContent3 += `<p>최고 <span>${themeItemdata["themeHome"][i].price}</span> ${themeItemdata["themeHome"][i].period}</p></li>`
                }
                $('#content .theme').eq(2).append(`<ul>${newContent3}</ul>`)



            })
            
        })


// `<ul><li><span class="loan">tag</span>`
// `<div class="info"><p>info</p>`
// `<h6>name</h6></div>`
// `<p>최고 <span>price</span></p></li>`

// `<li><span class="save">자동차대출</span>`
// `<div class="info"><p>신차 구매 자금도 은행방문 없이!</p>`
// `<h6>KB 매직카대출(신차 구매)</h6></div>`
// `<p>최고 <span>6천만원</span></p></li></ul>`



    /* map 페이지 json data 불러오기 기본작업 */
    var centerdata
    $.ajax({
        type: 'GET',
        url: 'data/center.json',
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType('application/json')
            }
        },
        success: function(data) {
            centerdata = data
        },
        error: function() {
            alert(xhr.status + '오류발생')
        }
    })

    /* map 페이지 :json data 불러오기 */
    $('#container').on('click', '.cont2map a', function(e) {
        e.preventDefault()
        var url = this.href
        var center = $(this).attr('class')
        $('#container > #content').remove()
        $('#container').load(url + " #content", function() {
            var newContent = ''
            for (var i in centerdata[center]) {
                newContent += `<li><h6>${centerdata[center][i].name}</h6>`
                newContent += `<p>[영업시간] ${centerdata[center][i].time}</p>`
                newContent += `<p>[도로명주소] ${centerdata[center][i].address}</p>`
                newContent += `<p>${centerdata[center][i].tel}</p></li>`
            }
            $('#content .centerInfo').html(`<ul>${newContent}</ul>`)
        })
    })



    /* notice 페이지 json data 불러오기 기본작업 */
    var noticedata
    $.ajax({
        type: 'GET',
        url: 'data/notice.json',
        beforeSend: function(xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType('application/json')
            }
        },
        success: function(data) {
            noticedata = data
        },
        error: function() {
            alert(xhr.status + '오류발생')
        }
    })
    /* notice 페이지: json 불러오기 */
    $('#container').on('click', '.cont4tab3 .title a', function(e) {
        e.preventDefault()
        var url = this.href
        var notice = $(this).attr('class')
        $('#container > #content').remove()
        $('#container').load(url + " #content", function() {
            var newContent = ''
            for (var i in noticedata[notice]) {
                newContent += `<li><a href="#"><div class="notice"><h6>${noticedata[notice][i].title}</h6>`
                newContent += `<span class="date">${noticedata[notice][i].date} ｜ </span>`
                newContent += `<span class="view">조회수 ${noticedata[notice][i].view}</span></div>`
                newContent += `<div class="noticeIcon"><i class="fas fa-chevron-right"></i></div></a></li>`
            }
            $('#content .noticeList').html(`<ul>${newContent}</ul>`)
        })
    })

})(jQuery)
