import SvgIcon from '@components/SvgIcon';
import { PostIconsProps } from './types';

const PostIcons = ({ liked, saved }: PostIconsProps) => {
  const iconClass = 'w-7 h-7 mr-3 cursor-pointer ';
  return (
    <div className='flex items-center p-4 pr-1 justify-between '>
      <div className='flex'>
        <SvgIcon
          icon={`Heart${liked ? 'Solid' : 'Outline'}`}
          className={iconClass}
        />
        <SvgIcon icon='CommentOutline' className={iconClass} />
        <SvgIcon icon='DirectOutline' className={iconClass} />
      </div>
      <SvgIcon
        icon={`Save${saved ? 'Solid' : 'Outline'}`}
        className={iconClass}
      />
    </div>
  );
};

export default PostIcons;
