    var data={
        FName:"",
        LName:"",
        Dobh:0,
        vayasu:0,
        Number:0,
        Father:"",
        Mother:"",
        Add:"",
        Gender:"",
        SSC:"",
        SSCY:0,
        SSCPER:0,
        SSCP:"",
        INTER:"",
        INTERY:0,
        INTERPER:0,
        INTERP:"",
        BTECH:"",
        BTECHY:0,
        BTECHPER:0,
        BTECHP:"",
        SKILLS:"",
        HOBBIES:"",
        PROFILE:"",
        BADGE:"",
        DES:"",

    }
    function modhatiperu(event)
    {
        data.FName=event.target.value;
    }
    function akhariperu(event)
    {
        data.LName=event.target.value;
    }
    function DOBH(event)
    {
        data.Dobh=event.target.value;
    }
    function vayass(event)
    {
        data.vayasu=event.target.value;
    }
    function number(event)
    {
        data.Number=event.target.value;
    }
    function fathername(event)
    {
        data.Father=event.target.value;
    }
    function mothername(event)
    {
        data.Mother=event.target.value;
    }

    function addre(event)
    {
        data.Add=event.target.value;
    }
    function gender(event)
    {
        data.Gender=event.target.value;
    }
    function ssc(event)
    {
        data.SSC=event.target.value;
    }

    function sscy(event)
    {
        data.SSCY=event.target.value;
    }
    function sscper(event)
    {
        data.SSCPER=event.target.value;
    }
    function sscp(event)
    {
        data.SSCP=event.target.value;
    }
    function inter(event)
    {
        data.INTER=event.target.value;
    }
    function intery(event)
    {
        data.INTERY=event.target.value;
    }
    function interper(event)
    {
        data.INTERPER=event.target.value;
    }
    function interp(event)
    {
        data.INTERP=event.target.value;
    }
    function btech(event)
    {
        data.BTECH=event.target.value;
    }
    function btechy(event)
    {
        data.BTECHY=event.target.value;
    }
    function btechper(event)
    {
        data.BTECHPER=event.target.value;
    }
    function btechp(event)
    {
        data.BTECHP=event.target.value;
    }
    function skills(event)
    {
        data.SKILLS=event.target.value;
    }
    function hobbies(event)
    {
        data.HOBBIES=event.target.value;
    }
    function profile(event)
    {
        data.PROFILE=event.target.value;
    }
    function badge(event)
    {
        data.BADGE=event.target.value;
    }
    function des(event)
    {
        data.DES=event.target.value;
    }

    function submit(event)
    {
        // event.preventDefault();
        console.log(data)
    }