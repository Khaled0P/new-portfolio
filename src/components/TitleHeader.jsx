import { memo } from 'react';

const TitleHeader = memo(({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p className='text-[10px] xs:text-xs sm:text-base'>{sub}</p>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
});

TitleHeader.displayName = 'TitleHeader';

export default TitleHeader;
