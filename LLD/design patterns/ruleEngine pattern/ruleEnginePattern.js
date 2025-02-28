// used in our company -- https://chatgpt.com/share/67204d9e-7d24-800f-8e88-9ce73b6374bb

class WorkflowEngine {
    constructor() {
        this.steps = [];
    }

    addStep(step) {
        this.steps.push(step);
    }

    execute(context) {
        for (const step of this.steps) {
            const result = step(context);
            if (!result.success) {
                console.log(`Stopping workflow at step: ${step.name}`);
                return result;
            }
        }
        return { success: true, message: "Workflow completed successfully" };
    }
}

// Define workflow steps
const validateOrderStep = (context) => {
    console.log("Validating order...");
    if (context.order.isValid) {
        return { success: true };
    }
    return { success: false, message: "Order validation failed" };
};

const processPaymentStep = (context) => {
    console.log("Processing payment...");
    if (context.payment.isProcessed) {
        return { success: true };
    }
    return { success: false, message: "Payment processing failed" };
};

const shipOrderStep = (context) => {
    console.log("Shipping order...");
    if (context.shipping.isShipped) {
        return { success: true };
    }
    return { success: false, message: "Shipping failed" };
};

// Configure the workflow
const orderWorkflow = new WorkflowEngine();
orderWorkflow.addStep(validateOrderStep);
orderWorkflow.addStep(processPaymentStep);
orderWorkflow.addStep(shipOrderStep);

// Execute the workflow
const orderContext = {
    order: { isValid: true },
    payment: { isProcessed: true },
    shipping: { isShipped: true },
};

const result = orderWorkflow.execute(orderContext);
console.log(result.message);
