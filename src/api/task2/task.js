task2 ={
    firstOfTask2: function (request, response)
    {
    let PlaceOfwork = request.query["placeOfwork"];
    console.log(PlaceOfwork);
    let PatientsOfTheClinic =[
        {
             fullName:"Зарацька Вікторія Петрівна",
             placeOfwork:"відділення нової пошти номер 8",
             vaccination_fromDiphtheriaOfthePatient:"незроблено"
         },
         {
             fullName:"Сливка Ліліянна Юріївна",
             placeOfwork:"художне училище",
             vaccination_fromDiphtheriaOfthePatient:"зроблено"
         },
         {
             fullName:"Мельник Мирослава Іванівна",
             placeOfwork:"УЗСШІзПВОП",
             vaccination_fromDiphtheriaOfthePatient:"зроблено"
         },
         {
             fullName:"Захаров Микола Іванович",
             placeOfwork:"прибиральник на вулиці Гагаріна",
             vaccination_fromDiphtheriaOfthePatient:"незроблено"
         },
         {
             fullName:"Сірко Мирослава Сергіївна",
             placeOfwork:"Ліцей 'Інтелект'",
             vaccination_fromDiphtheriaOfthePatient:"зроблено"
         },
         {
             fullName:"Корній Юрій Альбертович",
             placeOfwork:"журналіст каналу '1+1'",
             vaccination_fromDiphtheriaOfthePatient:"незроблено"
         },
 ];
    let arr = PatientsOfTheClinic.filter((elem) => {
        console.log(elem.fullName, PlaceOfwork, elem.placeOfwork, elem.vaccination_fromDiphtheriaOfthePatient, '\n');
        return (PlaceOfwork == elem.placeOfwork && elem.vaccination_fromDiphtheriaOfthePatient == "незроблено");
    })
    response.send(arr);
    }

}
module.exports=task2;