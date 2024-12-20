import { add, differenceInDays, differenceInMonths, differenceInYears } from "date-fns"
import numeral from "numeral";

export function splitAlgo(bills) {
    const map = new Map();
    const edges = [];
    const set = new Set();
    let expenditure = new Map();
    for (let bill of bills) {
        const { payedBy: payer, totalAmt: total, shares } = bill;
        set.add(payer);
        for (let i of shares) {
            const { name, share: amt } = i;
            if (expenditure.has(name)) {
                expenditure.set(name, expenditure.get(name) + parseFloat(amt));
            } else {
                expenditure.set(name, parseFloat(amt));
            }
            set.add(name);
            if (name === payer) {
                continue;
            } else {
                const key = `${name} -> ${payer}`
                if (map.has(key)) {
                    map.set(key, map.get(key) + parseFloat(amt));
                } else {
                    map.set(key, parseFloat(amt));
                }

            }
        }
    }
    for (let i of map) {
        // console.log("testing", i);
        const st = i[0].split(" -> ")[0];
        const en = i[0].split(" -> ")[1];
        const amount = i[1];
        // console.log(st, en, amount);
        edges.push({
            before: st,
            after: en,
            amount: parseFloat(amount)
        })
    }
    // // console.log("edges : ", edges, "set : ", set);
    // console.log(edges.length, set.size);
    const ans = [];
    if (edges.length <= set.size) {
        // console.log("Dore DOre");
        for (let i of edges) {
            ans.push({
                start: i.before,
                end: i.after,
                amount: i.amount
            })
        }
    } else {
        const people = []
        for (let i of set) {
            people.push(i);
        }
        people.sort();
        // console.log("edges", edges, "people", people);
        const count = people.length;
        let payment = []
        for (let i = 0; i < people.length; ++i) {
            payment.push(0);
        }
        while (edges.length != 0) {
            const { before: start, after: end, amount: amt } = edges[0];
            const ind = people.indexOf(start);
            let next = ind;
            while (people[next] != end) {
                payment[next] += amt;
                next = (next + 1) % count;
            }
            edges.splice(0, 1);
        }
        // console.log("payment", payment);
        let minimum = Number.MAX_VALUE;
        for (let i of payment) {
            minimum = Math.min(minimum, i);
        }
        if (minimum != 0) {
            payment = payment.map((x) => x - minimum);
        }
        for (let i = 0; i < payment.length; ++i) {
            if (payment[i] != 0) {
                ans.push({
                    start: people[i],
                    end: people[(i + 1) % count],
                    amount: payment[i]
                })
            }
        }
    }
    // console.log("ans", ans)
    // console.log("expenditure", expenditure);
    const arr = [];
    for (let i of expenditure) {
        // console.log(i);
        arr.push({
            name: i[0],
            amount: i[1]
        })
    }
    expenditure = arr;
    return { ans, expenditure };
}

export function formatVal(value) {
    const str = numeral(value).format('0.00');
    const ans = `${str} ₹`;
    return ans;
}

export function amountInRange(val) {
    if (val[0] === '-') {
        return false;
    }
    if (val.length > 15) {
        return false;
    }
    return true;

}

export function billAmountValidate(val) {
    if (val === "") {
        return true;
    }
    const num = parseFloat(val);
    if (num <= 0) {
        return false;
    } else {
        return true;
    }
}

export function billDurationValidate(val) {
    if (val === "") {
        return true;
    }
    const num = parseFloat(val);
    if (num % 1.0 != 0) {
        return false;
    }
    if (num <= 0) {
        return false;
    } else {
        return true;
    }
}

export function validateFileUpload(file) {
    if (file.size > 2000000) {
        return "File size is too big. File should be less than 2MB.";
    }
    if (!["image/jpg", "image/jpeg", "image/png", "application/pdf"].includes(file.type)) {
        return "File type not supported. File must only be of jpg, jpeg, png or pdf type.";
    }
    return null;
}

export function formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function isLeapYear(year) {
    const start = parseInt(year);
    if ((start % 4 === 0 && start % 100 !== 0) || (start % 400 === 0)) {
        return true;
    }
    return false;
}

export const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getNoOfDays(month, year) {
    if (month == 1 && isLeapYear(year)) {
        return 29;
    } else {
        return daysInMonth[month];
    }
}

export function calcExpiry(duration, start) {
    const res = add(start, duration)
    console.log(res);
    return res;
}

export function getTillExpiry(today, expiry) {
    console.log(today, expiry, new Date(today).getTime(), new Date(expiry).getTime())
    if (new Date(today).getTime() >= new Date(expiry).getTime()) {
        return null;
    }
    let temp = new Date(today);
    const years = differenceInYears(expiry, temp);
    temp = add(temp, { years: years });
    const months = differenceInMonths(expiry, temp);
    temp = add(temp, { months: months });
    const days = differenceInDays(expiry, temp);
    return { months, years, days };

}