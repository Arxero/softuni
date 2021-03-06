class Task {
    constructor(title, deadline) {
        this.title = title
        this.deadline = deadline
        this.status = 'Open'
    }

    get deadline() {
        return this._deadline
    }

    set deadline(value) {
        if (value < Date.now()) {
            throw new Error
        }
        this._deadline = value
    }

    get isOverdue() {
        if (Date.now() > this.deadline && this.status != 'Complete') {//its not in the past
            return true
        } else {
            return false
        }
    }

    get rank() {
        if (this.isOverdue) {
            return 0;
        } else if (this.status === 'In Progress') {
            return 1;
        } else if (this.status === 'Open') {
            return 2;
        } else {
            return 3;
        }
    }

    static comparator(a, b) {
        let criteria = a.rank - b.rank;

        if (criteria !== 0) {
            return criteria;
        } else {
            return a.deadline - b.deadline;
        }
    }

    get icon() {
        if (this.isOverdue) {
            return "\u26A0"
        } else if (this.status == "Open") {
            return "\u2731"
        } else if (this.status == "In Progress") {
            return "\u219D"
        } else if (this.status == 'Complete') {
            return "\u2714"
        }
    }

    toString() {
        if (this.isOverdue) {
            return `[${this.icon}] ${this.title} (overdue)`
        } else if (this.status == 'Complete') {
            return `[${this.icon}] ${this.title}`
        } else {
            return `[${this.icon}] ${this.title} {(deadline: ${this.deadline.toString()})}`
        }
    }

}