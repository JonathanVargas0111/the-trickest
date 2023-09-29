import Link from 'next/link';

const SocialLinkIcon = ({ href, icon, bgColor }) => {
  return (
    <Link href={href} target='_blank'>
      <div className={`rounded-full ${bgColor} p-1`}>
        {icon}
      </div>
    </Link>
  );
};

export default SocialLinkIcon;