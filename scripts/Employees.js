import { getEmployees, getOrders} from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type = "employee" data-id = "${employee.id}" data-name = "${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

addEventListener(
    "click",
    (clickEvent) => {
        const orders = getOrders()
        const itemClicked = clickEvent.target
        const employeeID = itemClicked.dataset.id
        if (itemClicked.dataset.type === "employee") {
            let numberOfOrders = 0
            for (const order of orders) {
                if (order.employeeId === parseInt(employeeID)) {
                    numberOfOrders ++
                }
            }
            window.alert( `${itemClicked.dataset.name} has sold ${numberOfOrders} products`)
        }
    }
)