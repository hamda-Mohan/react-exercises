import { useState } from 'react';

function StdDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const courses = [
    {
      id: 1,
      name: 'React Fundamentals',
      progress: 75,
      instructor: 'Sarah Wilson',
      nextLesson: 'Components & Props',
      color: 'blue',
    },
    {
      id: 2,
      name: 'JavaScript Advanced',
      progress: 45,
      instructor: 'Mike Johnson',
      nextLesson: 'Async/Await',
      color: 'purple',
    },
    {
      id: 3,
      name: 'UI/UX Design',
      progress: 90,
      instructor: 'Emily Chen',
      nextLesson: 'Color Theory',
      color: 'pink',
    },
  ];

  const assignments = [
    {
      id: 1,
      title: 'Build a Todo App',
      course: 'React Fundamentals',
      dueDate: '2026-10-20',
      status: 'pending',
    },
    {
      id: 2,
      title: 'API Integration',
      course: 'JavaScript Advanced',
      dueDate: '2026-07-18',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Design System',
      course: 'UI/UX Design',
      dueDate: '2026-11-25',
      status: 'in-progress',
    },
  ];

  const announcements = [
    {
      id: 1,
      title: 'New Course Available',
      message: 'Check out our new TypeScript course!',
      time: '2 hours ago',
    },
    {
      id: 2,
      title: 'Maintenance Notice',
      message: 'Platform updates scheduled for tonight',
      time: '5 hours ago',
    },
  ];

  const stats = [
    { label: 'Average Grade', value: '88%', icon: '📊' },
    { label: 'Courses', value: '3', icon: '📚' },
    { label: 'Study Hours', value: '45h', icon: '⏰' },
    { label: 'Assignments', value: '12', icon: '✍️' },
  ];

  const progressColors = {
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Dashboard Header */}
        <div className="mb-6 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-6 text-white shadow-lg">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-indigo-100">
                Student Dashboard
              </p>

              <h1 className="text-2xl font-bold sm:text-3xl">
                Welcome back, Hamdi! 👋
              </h1>

              <p className="mt-2 text-sm text-indigo-100">
                Here's what's happening with your courses today.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative rounded-xl bg-white/15 p-3 text-xl backdrop-blur-sm transition hover:bg-white/25">
                🔔
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              </button>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-purple-600 shadow-md">
                H
              </div>
            </div>
          </div>
        </div>

        {/* Quick Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-2xl transition group-hover:bg-indigo-50">
                  {stat.icon}
                </div>

                <div>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="mt-1 text-2xl font-bold text-slate-800">
                    {stat.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Course Progress */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    Course Progress
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Keep going, you're doing great!
                  </p>
                </div>

                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                  {courses.length} Courses
                </span>
              </div>

              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-indigo-100 hover:bg-white hover:shadow-sm"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="font-semibold text-slate-800">
                        {course.name}
                      </h3>

                      <span className="text-sm font-bold text-slate-600">
                        {course.progress}%
                      </span>
                    </div>

                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${progressColors[course.color]}`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="mt-3 flex flex-col gap-1 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                      <span>
                        Next lesson: {course.nextLesson}
                      </span>

                      <span className="font-medium text-slate-600">
                        {course.instructor}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Assignments & Announcements */}
          <div className="space-y-6">

            {/* Upcoming Assignments */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-800">
                  Assignments
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Track your latest tasks
                </p>
              </div>

              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="rounded-xl border border-slate-100 p-4 transition hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {assignment.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {assignment.course}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          assignment.status === 'completed'
                            ? 'bg-emerald-100 text-emerald-700'
                            : assignment.status === 'in-progress'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </div>

                    <p className="mt-3 text-xs text-slate-400">
                      Due {assignment.dueDate}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Announcements */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-800">
                  Announcements
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Latest updates
                </p>
              </div>

              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="rounded-xl border-l-4 border-indigo-500 bg-indigo-50/50 p-4"
                  >
                    <h3 className="font-semibold text-slate-800">
                      {announcement.title}
                    </h3>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      {announcement.message}
                    </p>

                    <p className="mt-2 text-xs font-medium text-slate-400">
                      {announcement.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default StdDashboard;

