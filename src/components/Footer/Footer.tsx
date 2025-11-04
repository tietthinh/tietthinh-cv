export const Footer: React.FC = () => {
  return (
    <div className="w-full">
      <div className="my-2 border border-t-2 border-white" />
      <div className="grid grid-cols-4 gap-2">
        <span className="col-span-full">
          For more information about this CV source code please visit GitHub
          repo shown above
        </span>
        <span className="col-span-full">
          Developed with ReactJS, Next.JS by Thinh Tran
        </span>
        <span className="col-span-full text-right">
          @ {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
};
