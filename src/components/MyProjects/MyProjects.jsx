import React from 'react';
import { Project } from './project';

const MyProjects = () => {
  return (
    <div className="px-5 md:px-11 xl:px-[7.5625rem] mt-[1.875rem] m flex flex-col gap-[1.875rem] xl:gap-32">
      <Project
        title="Project"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
"
        srcImg="git-user-search-app.jpg "
      />
      <Project
        title="Project"
        text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
"
        srcImg="git-user-search-app.jpg "
        flexReverse="lg:flex-row-reverse"
        itemsPosition="end"
      />
    </div>
  );
};

export default MyProjects;
