import { Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

interface CustomPageHeadingProps {
    heading: string;
    breadcrumbs: BreadcrumbItem[];
}

const CustomPageHeading = ({
    heading,
    breadcrumbs
}: CustomPageHeadingProps) => {
    return (
        <div className="border-b border-[#e7eaec] page-heading px-[20px] py-[25px] bg-white">
            <h2 className="text-[24px] uppercase font-normal mb-[5px]">{heading}</h2>
            <ol className="custom-breadcrumb flex flex-1">
                {breadcrumbs.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>{item.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default CustomPageHeading;