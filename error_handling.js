function handleReferenceError() {
    try {
        console.log(indefiniteVariable);
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("An error has been detected ReferenceError: " + error.message);
        } else {
            throw error;
        }
    }
}

handleReferenceError();
