import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem, type PageConfig } from '@/types';
import { Head } from '@inertiajs/react';
import CustomPageHeading from '@/components/custom-page-heading';
import CustomCard from '@/components/custom-card';
import CustomNotice from '@/components/custom-notice';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
//   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },

    {
        title: 'Thêm mới nhóm thành viên',
        href: '/user_catalogue',
    },
];

const schema = z.object({
    name: z.string().min(1, { message: "Tên nhóm thành viên là bắt buộc" }),
    canonical: z.string().min(1, { message: "Từ khóa nhóm thành viên là bắt buộc" }),
    description: z.string().optional(),
});

export type TFormValues = z.infer<typeof schema>;

const pageConfig: PageConfig<TFormValues> = {
    schema: schema,
    heading: 'Thêm mới nhóm thành viên',
};

export default function UserCatalogueSave() {

    const form = useForm<TFormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            canonical: '',
            description: '',
        },
    });
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={pageConfig.heading} />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl page-wrapper">
                <CustomPageHeading 
                    heading={pageConfig.heading} 
                    breadcrumbs={breadcrumbs} 
                />
                <div className='page-container'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-5'>
                            <CustomNotice />
                        </div>
                        <div className="col-span-7">
                            <Form {...form}>
                                <CustomCard
                                    isShowHeader={true}
                                    title="Thông tin chung"
                                    description="Nhập đầy đủ các thông tin trong các trường dưới đây"
                                >
                                    <div className='grid grid-cols-2 gap-4 mb-[20px]'>
                                        <div className='col-span-1'>
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Tên nhóm thành viên</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Nhập tên nhóm thành viên" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className='col-span-1'>
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Từ khóa nhóm</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Nhập từ khóa nhóm" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="description"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Mô tả ngắn</FormLabel>
                                                <FormControl>
                                                    <Textarea className="h-[168px]" placeholder="Nhập mô tả ngắn" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className='mt-[20px]'>
                                        <Button type="submit" className="bg-[#1a7bb9] rounded-[5px] font-light cursor-pointer">Lưu lại</Button>
                                    </div>
                                </CustomCard>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
