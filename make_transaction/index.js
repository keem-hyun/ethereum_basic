class TXO {
    constructor(owner, amount) {
        this.owner = owner;
        this.amount = amount;
        this.spent = false;
    }

    spend() {
        if (this.spent) {
            throw new Error("This TXO is already spent");
        }
        this.spent = true;
    }
}

// A가 B에게 10코인을 전송하여 B의 TXO 생성 case
const txoB = new TXO("B", 10);
console.log(txoB);

// B가 C에게 10코인을 전송하여 B의 TXO 사용 case
txoB.spend();
console.log(txoB);

// C에게 새로운 TXO 생성 case
const txoC = new TXO("C", 10);
console.log(txoC);

// B가 동일한 TXO 재사용 시도 case
try {
    txoB.spend();
} catch (e) {
    console.error(e.message);
}
