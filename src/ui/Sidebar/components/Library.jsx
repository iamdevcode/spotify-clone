import { SvgIconPlayList, SvgIconPlus } from '#/svg/icons'

export const Library = () => (
  <section className="bg-neutral-900 rounded-lg flex-1 p-4 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <SvgIconPlayList className="stroke-white" />
        <span className="text-white font-medium">Your Library</span>
      </div>
      <span onClick={() => {}}>
        <SvgIconPlus className="stroke-white hover:cursor-pointer" />
      </span>
    </div>
    <span className="text-neutral-400 inline-block font-medium">
      List of Songs!
    </span>
  </section>
)
