
class Tarea {


    constructor(_name, _date, _priority, _user, _hours) {
        this.name = _name;
        this.date = _date;
        this.priority = _priority;
        this.user = _user;
        this.hoursEstimated = _hours;
        this.status = "ToDo";
        this.hoursFinish = 0;
        this.desc = "";
    }

    getStatus() {
        return this.status;
    }

    getSpanishDate() {
        let date = new Date(this.date);
        let day = date.getDate();
        let mounth = date.getMonth()+1;
        let year = date.getFullYear();

        if(day < 10) { day = "0"+day; }
        if(mounth < 10) { mounth = "0"+mounth; }

        return day+"-"+mounth+"-"+year;
    }

    getProgress() {
        return (this.hoursFinish * 100) / this.hoursEstimated;
    }

}