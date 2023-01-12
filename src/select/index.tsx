import { Span } from '@/be.html'
import { DevControlStyleProps } from '@/core/be.core-types'
import { useTheme } from '@/hooks'
import { Transition } from '@headlessui/react'
import { forwardRef, Fragment, useState } from 'react'
import { HeadlessSelect } from './impl/select'
import { SelectOption } from './selectOption'

export type SelectOption = {
    name: string
    label: string
}
export enum SelectMode {
    Single,
    Multi,
}
export interface SelectProps
    extends Omit<React.HTMLProps<HTMLSelectElement>, 'data'>,
        DevControlStyleProps {
    data: SelectOption[]
    by?: string
    mode?: SelectMode
}

export const Select = forwardRef<HTMLUListElement, SelectProps>(
    (
        {
            data,
            mode = SelectMode.Single,
            $width,
            $minWidth,
            $bgColor,
            ...props
        },
        ref,
    ) => {
        const theme = useTheme()
        const [selectedData, setSelectedData] =
            useState<SelectOption | SelectOption[]>()

        return (
            <HeadlessSelect
                value={selectedData}
                onChange={setSelectedData}
                multiple={mode === SelectMode.Multi}
                $bgColor="neutral-300"
                {...props}
            >
                <HeadlessSelect.Button $width={$width} $height="8">
                    <Span $display="block">
                        {Array.isArray(selectedData)
                            ? selectedData.map((v) => v.label).join(',')
                            : selectedData?.label || ''}
                    </Span>
                </HeadlessSelect.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <HeadlessSelect.Options
                        $position="absolute"
                        $margin={{ top: '1' }}
                        $maxHeight="60"
                        $bgColor={$bgColor}
                        $width="max"
                        $minWidth={$minWidth}
                        $overflow="auto"
                        $borderRadius="sm"
                        $padding={{ y: '1' }}
                        $shadow="lg"
                        $ringWidth="1"
                        ref={ref}
                    >
                        {data.map((d) => (
                            <SelectOption
                                $minWidth={$minWidth}
                                $width="40"
                                $padding={{ x: '2' }}
                                key={d.name}
                                {...d}
                            />
                        ))}
                    </HeadlessSelect.Options>
                </Transition>
            </HeadlessSelect>
        )
    },
)
