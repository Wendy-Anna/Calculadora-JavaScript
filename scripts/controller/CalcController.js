class CalcController{

    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
    }

    get displayCalc(){
        return this._displayCalc;
    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "0";
        dateEl.innerHTML = "08/04/2020";
        timeEl.innerHTML = "10:39";

    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }

    
}