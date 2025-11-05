export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
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
    </footer>
  );
};
