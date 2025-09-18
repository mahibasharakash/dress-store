<template>

    <header class="w-full start-0 end-0 top-0 sticky duration-500" :class="{ 'py-3 bg-gray-300' : isScrolled, 'py-0 bg-white' : !isScrolled }">
        <div class="w-full max-w-[1600px] mx-auto min-h-[60px] max-h-[60px] flex justify-between items-center font-medium px-10">
            <a href="javascript:void(0)" class="decoration-0 text-black text-2xl">
                Logo
            </a>
            <ul class="flex justify-end items-center gap-2">
                <li>
                    <a href="javascript:void(0)" class="decoration-0 text-gray-800 text-sm inline-gray-800 py-2 px-2 relative before:absolute before:content-[''] before:start-0 before:bottom-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-gray-800 before:duration-500">
                        Home
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="decoration-0 text-gray-800 text-sm inline-gray-800 py-2 px-2 relative before:absolute before:content-[''] before:start-0 before:bottom-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-gray-800 before:duration-500">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="decoration-0 text-gray-800 text-sm inline-gray-800 py-2 px-2 relative before:absolute before:content-[''] before:start-0 before:bottom-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-gray-800 before:duration-500">
                        Contact Us
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="decoration-0 text-gray-800 text-sm inline-gray-800 py-2 px-2 relative before:absolute before:content-[''] before:start-0 before:bottom-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-gray-800 before:duration-500">
                        Blogs
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="decoration-0 text-gray-800 text-sm inline-gray-800 py-2 px-2 relative before:absolute before:content-[''] before:start-0 before:bottom-0 before:w-0 hover:before:w-full before:h-[2px] before:bg-gray-800 before:duration-500">
                        Shops
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="decoration-0 text-gray-800 text-sm inline-flex w-10 h-10 items-center justify-center border border-gray-800 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="decoration-0 text-gray-800 text-sm inline-flex w-10 h-10 items-center justify-center border border-gray-800 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </header>

</template>

<script>

export default {
    data() {
        return {
            isScrolled: false,
        }
    },
    beforeMounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);        
    },
    methods: {

        handleScroll() {
            this.isScrolled = window.scrollY > 20
        },
        
    }
}

</script>