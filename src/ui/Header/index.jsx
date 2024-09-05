'use client'
import {
  SvgIconArrowLeft,
  SvgIconArrowRight,
  SvgIconHomeFull,
  SvgIconSearch
} from '#/svg/icons'
import { Button } from '@/ui/Buttons/Button'

export const Header = () => (
  <header className="flex justify-between items-center">
    <div className="hidden md:flex items-center gap-x-2">
      <Button
        width={34}
        height={34}
        icon={<SvgIconArrowLeft />}
        rounded
        className="bg-neutral-900"
      />
      <Button
        width={34}
        height={34}
        icon={<SvgIconArrowRight />}
        rounded
        className="bg-neutral-900"
      />
    </div>
    <div className="flex items-center md:hidden gap-x-3">
      <Button
        width={34}
        height={34}
        backgroundColor="#fff"
        icon={<SvgIconHomeFull />}
        rounded
      />
      <Button
        width={34}
        height={34}
        backgroundColor="#fff"
        icon={<SvgIconSearch />}
        rounded
      />
    </div>
    <div className="flex items-center gap-x-4">
      <Button
        width={90}
        height={40}
        title="Sign Up"
        color="#fff"
        rounded
        onPress={() => {}}
      />
      <Button
        width={90}
        height={40}
        title="Login"
        color="#000"
        backgroundColor="#fff"
        rounded
        onPress={() => {}}
      />
    </div>
  </header>
)
