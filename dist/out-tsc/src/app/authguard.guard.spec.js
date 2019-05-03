import { TestBed, inject } from '@angular/core/testing';
import { AuthGuard } from './authguard.guard';
describe('AuthGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AuthGuard]
        });
    });
    it('should ...', inject([AuthGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=authguard.guard.spec.js.map