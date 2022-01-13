import data from "../../data";
import Adminnav from "./adminnav";

const List = {
    render() {
        return `
        <div class="bg-white max-w-5xl mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-6 gap-4">
            ${Adminnav.render()}

            <div class="bg-gray-100 col-span-5">
                <div class="container bg-gray-100 pt-16 px-6">
                    <table class="table-fixed min-w-full">
                        <thead>
                            <tr class="bg-slate-600">
                                <th class="pt-2 pb-2 pl-3 text-left">Tên</th>
                                <th class="pt-2 pb-2 pl-3 text-left">Nội dung</th>
                                <th class="pt-2 pb-2 pl-3 text-left">Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.map((post) => `<tr class="bg-slate-200 border-b border-slate-900">
                                                    <td class="pt-5 pb-5 pl-3 text-left">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 h-10 w-10">
                                                                <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                                                            </div>
                                                            <div class="ml-4">
                                                                <div class="text-sm font-medium text-gray-900">
                                                                    ${post.title}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="pt-5 pb-5 pl-3 text-left max-w-xs">${post.desc}</td>
                                                    <td class="pt-5 pb-5 pl-3 text-left">
                                                        <a href="${post.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                    </td>
                                                </tr>`).join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`;
    },
};

export default List;