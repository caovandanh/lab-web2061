import data from "../../data";
import Adminnav from "./adminnav";

const Edit = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `<div class="bg-white max-w-5xl mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-6 gap-4">
                    ${Adminnav.render()}

                    <div class="bg-gray-100 col-span-5">
                        <div class="md:grid md:grid-cols-3 md:gap-6">
                            </div>
                            <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div class="shadow sm:rounded-md sm:overflow-hidden">
                                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div>
                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                            Tên bài viết
                                        </label>
                                        <input type="text" name="" id="" autocomplete="" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="${found.title}">
                                    </div>
                                    <div>
                                        <label for="about" class="block text-sm font-medium text-gray-700">
                                            Nội dung
                                        </label>
                                        <div class="mt-1">
                                            <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="${found.desc}"></textarea>
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">
                                            Ảnh
                                        </label>
                                        <div class="mt-1 flex items-center">
                                            <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                <img src="${found.img}" />
                                            </span>
                                            <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Chọn ảnh
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                    <label class="block text-sm font-medium text-gray-700">
                                        Cover photo
                                    </label>
                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div class="space-y-1 text-center">
                                            <img src="${found.img}" />>
                                            <div class="flex text-sm text-gray-600">
                                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                                </label>
                                                <p class="pl-1">or drag and drop</p>
                                            </div>
                                            <p class="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Edit
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>`;
    },
};

export default Edit;