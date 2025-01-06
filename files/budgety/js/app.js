// BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.persentage = -1;
    }
    
    Expense.prototype.calcPecentages = function(totalIncome) {
        if (totalIncome > 0) {
            this.persentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.persentage = -1;
        }
    };
    
    Expense.prototype.getPercntages = function() {
        return this.persentage;
    }
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }    
    
    var calculateTotal = function(type) {
        var sum = 0;
        
        data.allItems[type].forEach(function(element) {
            sum += element.value;  
        });
        
        data.totals[type] = sum;
    }; 
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
             
            // Create new item based on 'inc' of 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val); 
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            return newItem;
        },
        
        deleteItem: function(type, id) {
            var ids, index;
            
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });
            
            index = ids.indexOf(id);
            
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        
        calcBudget: function() {
            
            // Calculate total icome and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // Calculate the budget: inc - exp
            data.budget = data.totals.inc - data.totals.exp;
            
            // Calculate the precentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },
        
        calculatePercentages: function() {
            data.allItems.exp.forEach(function(element) {
                element.calcPecentages(data.totals.inc);
            });
        },
        
        getPercntages: function() { 
            var allPerc = data.allItems.exp.map(function(element) {
                return element.getPercntages();
            });
            
            return allPerc;
        },
        
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
            
        }
    };
    
})();

// UI CONTROLLER
var UIController = (function() {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incLabel: '.budget__income--value',
        expLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
        
    };
    
    var formatNumber = function(num, type) {
            var numSplit, int, dec, sign;
            
            num = Math.abs(num);
            num = num.toFixed(2);
            
            numSplit = num.split('.');
            
            int = numSplit[0];
            
            dec = numSplit[1];
            
            if (int.length > 3) {
                int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3);
            }            
            
            return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;
        };
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        
        addListItem: function(obj, type) {
            var html, newHtml, element;
            
            // 1. Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            
            // 2. Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id).replace('%description%', obj.description).replace('%value%', formatNumber(obj.value, type));
            
            // 3. Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
        clearField: function() {
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            
            fieldsArr = [].slice.call(fields);

            //fieldsArr = Array.prototype.slice.call(fields);
            
            fields.forEach(function(element) {
                element.value = '';
            });
            
            fieldsArr[0].focus();
        },
        
        displayBudget: function(obj) {
            var type = obj.budget >= 0 ? 'inc' : 'exp';
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            
            if (obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },
        
        deleteListItem: function(selectorID) {
            
            var el = document.getElementById(selectorID);   
            el.parentNode.removeChild(el);              
        },
        
        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMStrings.expPercLabel);
            
            /*            
            var nodeListForEach = function(list, callback) {
                for(var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }    
            };
            
            nodeListForEach(fields, function(cur, index) {
                if (percentages[index] > 0) {
                    cur.textContent = percentages[index] + '%';
                } else {
                    cur.textContent = '---';
                }
            });
            */
            
            var forEach = [].forEach;
            
            fields.forEach(function(element, index) {
                if (percentages[index] > 0) {
                    element.textContent = percentages[index] + '%';
                } else {
                    element.textContent = '---';
                }
            });
        },
           
        displayMonth: function() {
            var now, year, month, months;
            
            now = new Date();
            
            year = now.getFullYear();
            
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            
            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
            
        },
        
        changeType: function(type) {
            
            var fields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue);
            
            var forEach = [].forEach;
            
            fields.forEach(function(element) {
                element.classList.toggle('red-focus');
            });
            
            document.querySelector(DOMStrings.inputBtn).classList.toggle('red');
            
        },
        
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
    
})();


// CLOBAL APP CONTROLLER
var controller = (function(budgerCtrls, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', function(event) {       
            var keyCodeEnter = 13;
            
            if (keyCodeEnter === event.keyCode || event.which === keyCodeEnter) {
                ctrlAddItem();
            }
        });
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
    };
    
    var updatePercentages = function() {
        
        var percentages;
        // 1. Calculate percentages
        budgerCtrls.calculatePercentages();
        
        // 2. Read percentages from the budhet controller
        percentages = budgerCtrls.getPercntages();
        
        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
        console.log(percentages)
    };
   
    var updateBudget = function() {
        
        // 1. Calculate the budget
        budgerCtrls.calcBudget();
        
        // 2. Return the budget
        var budget = budgerCtrls.getBudget();
        
        // 3. Display the budget on the UI   
        UICtrl.displayBudget(budget);
    }
    
    
    var ctrlAddItem = function () {
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getInput();
        
        if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item the budget controller
            newItem = budgerCtrls.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearField();       

            // 5. Calculate and update budget
            updateBudget();
            
            // 6. Calculate and update percentages
            updatePercentages();
        }
    }
    
    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID; 
        
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id
        
        if (itemID) {
            
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // 1. Delete the item from the data structure
            budgerCtrls.deleteItem(type, ID);
            
            // 2. Delete the item from UI
            UICtrl.deleteListItem(itemID);
            
            // 3. Update and show the new budget
            updateBudget();
            
            // 4. Calculate and update percentages
            updatePercentages();
        }
    };
    
    return {
        init: function() {
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1 
            });
            
            setupEventListeners();         
        }
    };
    
})(budgetController, UIController);

controller.init();
