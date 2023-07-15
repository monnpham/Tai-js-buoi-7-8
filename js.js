const list = []
function add_number() {
    var n = Number(document.getElementById("numb").value)
    list.push(n)
    document.getElementById("Array").innerHTML = list
}
const list1 = []
function add_num() {
    var n = Number(document.getElementById("n").value)
    list1.push(n)
    document.getElementById("Array1").innerHTML = list1
}
function sum__Array() {
    var sum = 0
    for (var i = 0; i < list.length; i++) {
        if (list[i] > 0)
            sum += list[i]
    }
    document.getElementById("sum").innerHTML = sum
}
function count__p__number() {
    var count = 0
    for (var i = 0; i < list.length; i++) {
        if (list[i] > 0)
            count++
    }
    document.getElementById("count__p").innerHTML = count
}

function find__small__num() {
    var small = list[0]
    for (var i = 1; i < list.length; i++) {
        if (list[i] < small)
            small = list[i]
    }
    document.getElementById("small__n").innerHTML = small

}

function find__small__p__num() {
    var listp = [], i
    for (i = 0; i < list.length; i++) {
        if (list[i] > 0)
            listp.push(list[i])
    }
    var smallp = listp[0]
    for (i = 1; i < listp.length; i++) {
        if (listp[i] < smallp)
            smallp = listp[i]
    }
    document.getElementById("small__p__n").innerHTML = smallp

}
function find__e__num() {
    var liste = [], i
    for (i = 0; i < list.length; i++) {
        if (list[i] % 2 == 0)
            liste.push(list[i])
    }
    if (liste.length != 0)
        document.getElementById("small__e__n").innerHTML = "Số Chẵn Cuối Cùng = " + liste[liste.length - 1]
    else
        document.getElementById("small__e__n").innerHTML = "Số Chẵn Cuối Cùng = 0"

}

function swap__num() {
    var
        list__swap = [],
        n1 = Number(document.getElementById("loca__1").value),
        n2 = Number(document.getElementById("loca__2").value)
    for (i = 0; i < list.length; i++) {
        if (i == n1) {
            list__swap.push(list[n2])
        } else {
            if (i == n2) {
                list__swap.push(list[n1])
            } else {
                if (i > list.length)
                    list__swap.push("")
                list__swap.push(list[i])
            }

        }
    }
    document.getElementById("swap").innerHTML = "Mảng Sau Khi Đổi:  " + list__swap
}
function Sort__up__increase() {
    var list__sort = selectionSort(list)
    document.getElementById("sort").innerHTML = list__sort

}
function selectionSort(array) {
    var minIndex
    for (var i = 0; i < array.length - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}
function first__prime() {
    var stop = 0
    for (var i = 0; i < list.length; i++) {
        if (isPrime(list[i])) {
            var prime = list[i]
            stop = 1
            break
        }
    }
    if (stop == 1)
        document.getElementById("prime").innerHTML = prime
    else
        document.getElementById("prime").innerHTML = "Không Có Sô Nguyên Tố"
}



function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function count__Integer() {
    var count__int = 0
    for (var i = 0; i < list1.length; i++) {
        if (Number.isInteger(list1[i]))
            count__int++
    }
    document.getElementById("integer").innerHTML = "Số Nguyên:  " + count__int

}

function compare__p__N() {
    var p = 0, n = 0
    for (var i = 0; i < list.length; i++) {
        if (list[i] > 0)
            p++
        if (list[i] < 0)
            n++
    }
    if (p > n)
        document.getElementById("compare").innerHTML = "Số Dương > Sô Âm"
    if (p < n)
        document.getElementById("compare").innerHTML = "Sô Âm > Số Dương"
    if (p == n)
        document.getElementById("compare").innerHTML = "Số Dương = Sô Âm"
}