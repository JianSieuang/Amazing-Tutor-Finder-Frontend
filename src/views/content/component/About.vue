<template>
    <div class="d-flex">
        <div class="flex-fill d-flex justify-content-center" style="background-color: #f0f2f5">
            <span class="fs-5 fw-bold m-4">About</span>
        </div>
    </div>
    <div class="responsive-container px-5 py-5 mx-5 gap-5">
        <div class="text-content">
            <h1 class="font-bold leading-none" style="color: #e9eaf0; font-size: 88px">2025</h1>
            <h2 class="text-3xl font-bold text-black mt-2">We share knowledge with the world</h2>
            <p class="text-base text-gray-600 mt-4">Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fermentum quam mauris. Fusce tempor et augue a aliquet. Donec non ipsum non risus egestas tincidunt at vitae nulla.</p>
        </div>
        <div class="image-content">
            <img src="@/assets/png/about_us_1.png" alt="About Us" class="img-fluid rounded" style="max-height: 400px; width: 100%; object-fit: cover" />
        </div>
    </div>

    <div class="d-flex justify-content-center align-items-center py-4" style="background-color: #ffffff">
        <div class="text-center mx-5">
            <h3 class="fw-bold text-danger"><font-awesome-icon icon="user-group" /> 671,000</h3>
            <p class="text-muted">Students</p>
        </div>
        <div class="text-center mx-5">
            <h3 class="fw-bold text-primary"><font-awesome-icon icon="book" /> 26,000</h3>
            <p class="text-muted">Tutors</p>
        </div>
    </div>
    <div class="d-flex flex-column flex-md-row align-items-start" style="background-color: #ffeedd">
        <!-- Image Container -->
        <div class="w-100 w-md-55 d-flex justify-content-center justify-content-md-start order-2 order-md-1 mission-image-container">
            <img src="@/assets/png/mission_image.png" alt="Mission Image" class="img-fluid mission-image" />
        </div>
        <!-- Text Content -->
        <div class="w-100 w-md-45 p-3 p-md-4 order-1 order-md-2 mt-auto mb-auto">
            <h1 class="fw-bold text-center text-md-start" style="font-size: 1.5rem; color: orange">OUR ONE BILLION MISSION</h1>

            <p class="fw-bold text-center text-md-start" style="font-size: 2rem; color: black">Our one billion mission sounds bold, We agree.</p>

            <blockquote class="text-center text-md-start" style="font-style: italic; color: black; font-size: 1rem">
                <p class="mb-0">"We cannot solve our problems with the same thinking we used when we created them."</p>
                <footer class="font-[0.075rem]" style="color: black">Albert Einstein</footer>
            </blockquote>

            <p class="text-muted text-center text-md-start" style="font-size: 0.875rem; color: black">Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.</p>
        </div>
    </div>
</template>

<style>
.responsive-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.text-content {
    width: 50%;
}

.image-content {
    width: 50%;
}

@media (max-width: 1000px) {
    .responsive-container {
        flex-direction: column;
        align-items: flex-start;
    }

    .text-content,
    .image-content {
        width: 100%;
    }

    .image-content img {
        max-height: none;
        object-fit: contain;
    }
}

.mission-image-container {
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    padding: 0 !important;
    margin: 0 !important;
}

.mission-image {
    width: 100%;
    height: auto;
    object-fit: cover;
}

@media (max-width: 733px) {
    .mission-image-container {
        max-height: 250px;
    }

    .mission-image {
        width: 100%;
        height: auto;
    }

    .d-flex {
        flex-direction: column;
    }

    .w-md-55,
    .w-md-45 {
        width: 100% !important;
    }

    .p-md-4 {
        padding: 1rem !important;
    }
}
</style>
