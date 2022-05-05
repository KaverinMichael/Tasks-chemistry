let btn = document.querySelectorAll('.topicview')

let btnPdf = document.querySelector('.pdfBtn')

let pdf = document.querySelector('.pdf')

let choiseTask = document.querySelector('.topic__choices')

let lecturesPdf = document.querySelector('.topicPdf')


//begin statemen
function stat() {
    btnPdf.style.visibility = 'hidden'
}

stat()

//logic

btnPdf.onclick = function () {
    pdf.src = " "
    btnPdf.style.visibility = 'hidden'
    choiseTask.style.visibility = 'visible'
    lecturesPdf.style.width = '80%'
    choiseTask.style.width = '20%'
}


btn.forEach(function(btn){
    btn.addEventListener('click', function(){
        let numberTheme = btn.dataset.id
        pdf.src = `/pdf/${numberTheme}.pdf`
        btnPdf.style.visibility = 'visible'
        lecturesPdf.style.width = '100%'
        choiseTask.style.width = '0%'
    })
})



