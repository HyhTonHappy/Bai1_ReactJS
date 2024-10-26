function MainContent() {
    return (
        <div className="bg-gray-50 text-center">
            <h1 className="font-thin text-4xl mt-4">A warm welcome!</h1>
            <p className="my-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className="mt-6" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Call to action</button>
        </div>
    );
}
export default MainContent;