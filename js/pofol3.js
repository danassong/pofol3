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
        var themeItem = $(this).attr('class')
        $('#container > #content').remove()
        $('#container').load(url + " #content", function() {
            var newContent = ''
            for (var j in themeItemdata[themeItem]) {
                for (var i in themeItemdata[themeItem][j]) {
                newContent += `<li><span class="loan">${themeItemdata[themeItem][j][i].tag}</span>`
                newContent += `<div class="info"><p>${themeItemdata[themeItem][j][i].info}</p>`
                newContent += `<h6>${themeItemdata[themeItem][j][i].name}</h6></div>`
                newContent += `<p>최고 <span>${themeItemdata[themeItem][j][i].price}</span> ${themeItemdata[themeItem][j][i].period}</p></li>`
                }
            }
            $('#content .theme').append(`<ul>${newContent}</ul>`)
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
