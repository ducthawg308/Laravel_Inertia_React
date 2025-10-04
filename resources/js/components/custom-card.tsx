import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface CustomCardProps {
    loading?: boolean;
    title?: string;
    description?: string;
    height?: string;
    isShowHeader?: boolean;
    isShowFooter?: boolean;
    children?: React.ReactNode;
    footerChildren?: React.ReactNode;
}

const CustomCard = ({
    loading,
    title,
    description,
    height,
    isShowHeader,
    isShowFooter,
    children,
    footerChildren,
}: CustomCardProps) => {
    return (
        <Card className="relative rounded-[5px] overflow-hidden">
            {isShowHeader && 
                <CardHeader className='border-b'>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
            }
            <CardContent className={`py-[20px] ${height ?? 'h-[48px]'}}`}>
                {children}
            </CardContent>
            {isShowFooter && 
                <CardFooter className='flex justify-center'>
                    {footerChildren}
                </CardFooter>
            }
            {loading &&
                <div className="absolute inset-0 flex items-center justify-center bg-white/70 dark:bg-black/40 z-10">
                    <Loader2 className="animate-spin size-8 text-muted-foreground" />
                </div>
            }
        </Card>
    )
}

export default CustomCard;