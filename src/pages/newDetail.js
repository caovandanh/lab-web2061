import data from "../data";

const NewsDetail = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `<div class="max-w-5xl mx-auto grid grid-cols-2 gap-4 mt-7 mb-7">
                    <div><img src="${found.img}" /></div>
                    <div class="ml-4">
                        <h2 class="mt-5 mb-6 text-red-600 text-3xl">${found.title}</h2>
                        <p>${found.desc}</p>
                    </div>
                </div>`;
    },
};
export default NewsDetail;