<template>
    <div class="dboardcontent mx-5">
      <!-- Profile Bar -->
      <div class="profilebar">
        <!-- Left: Tutor Avatar -->
        <div class="profile-avatar">
          <img src="@/assets/png/avatar1.png" alt="Tutor Avatar" class="avatar" />
        </div>
  
        <!-- Center: Tutor Info -->
        <div class="profile-info">
          <span class="tutor-name">Tutor Name</span>
          <span class="tutor-email">tutor_email@gmail.com</span>
        </div>
  
        <!-- Right: Edit Profile Button -->
        <div class="profile-action">
          <button class="edit-btn">Edit Profile</button>
        </div>
      </div>
  
      <!-- Placeholder for databar and infobar -->
      <div class="databar">
        <!-- Data Box 1: Students -->
    <div class="data-box">
      <div class="icon-div">
        <font-awesome-icon icon="fa-solid fa-user-graduate" class="icon" />
      </div>
      <div class="info-div">
        <span class="data">10</span>
        <span class="label">Students</span>
      </div>
    </div>

    <!-- Data Box 2: Total Earnings -->
    <div class="data-box">
      <div class="icon-div">
        <font-awesome-icon icon="fa-solid fa-wallet" class="icon" />
      </div>
      <div class="info-div">
        <span class="data">MYR 12,345.00</span>
        <span class="label">Total Earning</span>
      </div>
    </div>

    <!-- Data Box 3: Online Courses -->
     <!-- if just either online or physical, can remove the other one -->
    <div class="data-box">
      <div class="icon-div">
        <font-awesome-icon icon="fa-solid fa-calendar-alt" class="icon" />
      </div>
      <div class="info-div">
        <span class="data">3</span>
        <span class="label">Online Sessions</span>
      </div>
    </div>

    <!-- Data Box 4: Physical Courses -->
    <div class="data-box">
      <div class="icon-div">
        <font-awesome-icon icon="fa-solid fa-person-walking-luggage" class="icon"/>      
        </div>
      <div class="info-div">
        <span class="data">1</span>
        <span class="label">Physical Sessions</span>
        </div>
        </div>
    </div>
      <div class="infobar">
        <!-- Schedule Section -->
            <div class="schedule">
            <!-- Schedule Header -->
            <div class="schedule-header">
                <span class="schedule-label">Schedule</span>
            </div>

            <!-- Schedule Content (Scrollable) -->
            <div class="schedule-content">
                <div class="content-row" v-for="(session, index) in scheduleData" :key="index">
                <!-- Left: Content Icon -->
                <div class="content-icon">
                    <font-awesome-icon icon="fa-solid fa-calendar-alt" class="icon" />
                </div>

                <!-- Right: Student & Session Info -->
                <div class="content">
                    <span class="student-name">{{ session.student }}</span>
                    <span class="student-session">{{ session.time }}</span>
                    <span class="session-method" :class="session.method === 'Online' ? 'online' : 'physical'">
                    {{ session.method }}
                    </span>
                </div>
                </div>
            </div>
            </div>

            
            <!-- Right Section -->
                <!-- Right Section -->
                <div class="right-section">
                <!-- Overall Rating -->
                <div class="overall-rating">
                    <!-- Header -->
                    <div class="rating-header">
                    <span class="rating-label">Overall Rating</span>
                    </div>

                    <!-- Rating Content -->
                    <div class="rating-content">
                    <!-- Left: Average Rating -->
                    <div class="average-rating">
                        <span class="rating-number">{{ ratingStats.averageRating }}</span>
                        <span class="rating-text">Overall Rating</span>
                    </div>

                    <!-- Right: Rating Progress Bars -->
                    <div class="rating-progress">
                        <div class="progress-row" v-for="star in [5, 4, 3, 2, 1]" :key="star">
                        <span class="star-label">{{ star }} Star</span>
                        <div class="progress-bar">
                            <div
                            class="filled-bar"
                            :style="{ width: ratingStats.ratingPercentages[star] + '%' }"
                            ></div>
                        </div>
                        <span class="percentage">{{ ratingStats.ratingPercentages[star] }}%</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    
    
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";

const scheduleData = ref([
  { student: "LEW KIEN YEW", time: "Jan - Feb 2024, 5:00pm - 8:00pm", method: "Online" },
  { student: "SIM BOON XUN", time: "Feb - March 2024, 8:00am - 10:00am", method: "Cyberjaya" },
  { student: "JS", time: "Feb - March 2024, 8:00am - 10:00am", method: "Puchong" },
  { student: "LEW KIEN YEW", time: "Jan - Feb 2024, 5:00pm - 8:00pm", method: "Online" },

]);


const ratings = ref([5, 5, 4, 5, 3, 2, 5, 1, 4, 4, 3, 5, 5, 5, 4, 4, 3, 5, 2, 1, 5, 4, 3, 5, 5, 2, 5]);

const calculateRatings = (ratings) => {
  const totalRatings = ratings.length || 0;
  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  const ratingPercentages = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  let averageRating = 0;

  if (totalRatings > 0) {
    ratings.forEach((rating) => {
      if (rating >= 1 && rating <= 5) {
        ratingCounts[rating] += 1;
      }
    });

    Object.keys(ratingCounts).forEach((star) => {
      ratingPercentages[star] = ((ratingCounts[star] / totalRatings) * 100).toFixed(1);
    });

    averageRating = (ratings.reduce((sum, rating) => sum + rating, 0) / totalRatings).toFixed(1);
  }

  return { totalRatings, ratingCounts, ratingPercentages, averageRating };
};

const ratingStats = computed(() => calculateRatings(ratings.value));


  </script>
  
  <style scoped>
  /* Main container */
  .dboardcontent {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  /* Profile Bar */
  .profilebar {
    background-color: #111033;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.5rem;
    /* border-radius: 10px; */
  }
  
  /* Left - Tutor Avatar */
  .profile-avatar .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  /* Center - Tutor Info */
  .profile-info {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-grow: 1; 
    padding-left: 2rem;
  }
  
  .tutor-name {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .tutor-email {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 300;
  }
  
  /* Right - Edit Profile Button */
  .profile-action .edit-btn {
    background-color: #FF6636;
    color: white;
    border: none;
    padding: 0.7rem 1.5rem;
    font-size: 1rem;
    /* border-radius: 5px; */
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .profile-action .edit-btn:hover {
    background-color: #e05530;
  }
  /* `databar` - row layout */
.databar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;
}

/* Data Box - */
.data-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #ffffff;
  /* border-radius: 10px; */
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
}

/* icon */
.icon-div {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6; 
  width: 50px;
  height: 50px;
  /* border-radius: 50%; */
  margin-right: 1rem;
}

/* Icon  */
.icon {
  font-size: 1.5rem;
  color: #FF6636;
}

/* right info (data) */
.info-div {
  display: flex;
  flex-direction: column;
  text-align: left;
}

/* Data  */
.data {
  font-size: 1.4rem;
  font-weight: bold;
  color: #1D2026;
}

/* Label  */
.label {
  font-size: 1rem;
  font-weight: 300;
  color: #6E7485;
}
/* infobar - Row Layout */
.infobar {
  display: flex;
  justify-content: center;
  gap: .5rem;
  margin-top: 1.5rem;
}

/* Schedule Section */
.schedule {
  display: flex;
  flex-direction: column;
  width: 40%; /* Left section takes 50% */
  min-width: 40%;
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Schedule Header */
.schedule-header {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #E9EAF0;
  margin-bottom: 0.5rem;
}

.schedule-label {
  font-size: 1.3rem;
  font-weight: 600; /* SemiBold */
  color: #1D2026;
}

/* Schedule Content (Scrollable) */
.schedule-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 300px; 
  overflow-y: auto;
  padding-right: 0.5rem; /* prevent scroll bar block content */
}

/* Scrollbar Styling */
.schedule-content::-webkit-scrollbar {
  width: 6px;
}

.schedule-content::-webkit-scrollbar-track {
  background: #f3f4f6;
}

.schedule-content::-webkit-scrollbar-thumb {
  background: #bdbdbd;
  border-radius: 6px;
}

/* Content Row - */
.content-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Left: Content Icon */
.content-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.icon {
  font-size: 1.2rem;
  color: #FF6636;
}

/* Right: Content Information */
.content {
  display: flex;
  flex-direction: column;
  text-align: left;
}

/* Student Name */
.student-name {
  font-size: 1rem;
  font-weight: bold;
  color: #1D2026;
}

/* Session Time */
.student-session {
  font-size: 0.9rem;
  font-weight: 400;
  color: #6E7485;
}

/* Session Method */
.session-method {
  font-size: 0.85rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 2px 8px;
  width: fit-content;
}

/* Online & Physical Style */
.online {
  background: #e3fcef;
  color: #28a745;
}

.physical {
  background: #ffebe6;
  color: #ff6636;
}
/* Right Section */
.right-section {
  display: flex;
  flex-direction: column;
  width: 50%; /* 右侧占50% */
}

/* Overall Rating 主容器 */
.overall-rating {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Header - 标题 */
.rating-header {
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #E9EAF0;
  margin-bottom: 0.5rem;
}

.rating-label {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1D2026;
}

/* Rating Content (Row Layout) */
.rating-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}

/* 左侧: 平均评分 */
.average-rating {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30%;
}

.rating-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1D2026;
}

.rating-text {
  font-size: 1rem;
  font-weight: 400;
  color: #6E7485;
}

/* 右侧: 评分进度条 */
.rating-progress {
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 0.5rem;
}

/* 单个评分进度条 */
.progress-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 星星标签 */
.star-label {
  width: 70px;
  font-size: 1rem;
  font-weight: 400;
  color: #6E7485;
}

/* 进度条 */
.progress-bar {
  width: 100%;
  height: 10px;
  background: #E9EAF0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

/* 已填充部分 */
.filled-bar {
  height: 100%;
  background: #FD8E1F;
  transition: width 0.5s ease-in-out;
}

/* 右侧百分比 */
.percentage {
  font-size: 1rem;
  font-weight: 400;
  color: #6E7485;
}


  </style>
  