

const sendForm = async (values) => {
    const response = await fetch(process.env.NEXT_PUBLIC_GET_FORM_URL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json",
        },
    });
    return response
}

export {sendForm}