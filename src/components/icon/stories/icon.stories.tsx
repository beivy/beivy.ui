import { Icon, IconType } from '../'
import { Box } from '../../core'

export default {
    title: 'Library/Icon',
    component: Icon,
}

export const Icons = () => {
    const group1 = [
        'Add',
        'ArrowForward',
        'ChevronUp',
        'ChevronDown',
        'Close',
        'Delete',
        'MoreVert',
        'VisibilityOn',
        'VisibilityOff',
    ]
    const group2 = [
        'Edit',
        'Email',
        'Favorite',
        'Group',
        'Home',
        'Info',
        'Payment',
        'Search',
        'Send',
    ]
    const group3 = ['Event', 'DateRange', 'Message', 'Today', 'Warning']
    const group4 = [
        'Check',
        'CheckboxDeselected',
        'CheckboxIndeterminate',
        'CheckboxSelected',
    ]
    const group5 = ['RadioButtonDeselected', 'RadioButtonSelected']
    const groups = [group1, group2, group3, group4, group5] as IconType[][]
    const iconGroup = (types: IconType[]) => {
        const icons = types.map((type) => {
            return (
                <Icon
                    $fill="primary-400"
                    hover$fill="primary"
                    // hover$stroke="ext-green-400"
                    // hover$strokeWidth="1"
                    $width="8"
                    $height="8"
                    type={type}
                />
            )
        })
        return (
            <Box $direction="row" $space="x-2">
                {icons}
            </Box>
        )
    }
    const icons = groups.map((group) => {
        return iconGroup(group)
    })

    return (
        <Box $direction="col" $space="y-2">
            {icons}
        </Box>
    )
}
