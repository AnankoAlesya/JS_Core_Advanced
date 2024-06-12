async function fetchAndProcessData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
        return `An error occurred: ${error.message}`;
    }
}

fetchAndProcessData("https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA&oq=&gs_lcrp=EgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyEQgCEAAYAxhCGI8BGLQCGOoCMhEIAxAAGAMYQhiPARi0AhjqAjIPCAQQLhgDGI8BGLQCGOoCMhEIBRAAGAMYQhiPARi0AhjqAjIRCAYQABgDGEIYjwEYtAIY6gIyEQgHEAAYAxhCGI8BGLQCGOoC0gENNjI0NjAxODQ1ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8"); // Вызываем функцию

