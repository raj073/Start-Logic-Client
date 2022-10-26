import React from 'react';

const Course = ({ courseDetails }) => {

    console.log(courseDetails);

    const { course_id, title, level, ratings, img_url, author, author_img_url, details } = courseDetails;

    return (
        <div>

            <h3>This is Course</h3>

        </div>
    );
};

export default Course;